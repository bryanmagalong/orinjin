import axios from 'axios';
import baseURL from '../axios';
import { UPLOAD_IMAGE, UPLOAD_SERVICE_IMAGE } from '../actions/uploads';
import { updateProfileSuccess, updateProfileError, getUser } from '../actions/user';
import { addService } from '../actions/service';

// Cloudinary presets
const AVATAR_PRESET = 'ewfjt9wc';
const IMAGE_PRESET = 'o2qooexr';

/**
 * Formats the image file before sending upload http request
 *
 * @param {File} image
 * @param {String} uploadPreset
 * @return {function} POST http request
 */
const uploadImage = (image, uploadPreset) => {
  // get current date
  const timestamp = Date.now() / 1000;
  // Image data formatting
  const formData = new FormData();
  formData.append('api_key', '917165839151738');
  formData.append('file', image);
  formData.append('timestamp', timestamp);
  formData.append('upload_preset', uploadPreset);

  return axios.post('https://api.cloudinary.com/v1_1/orinjin/image/upload', formData);
};

const uploadsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      uploadImage(action.payload, AVATAR_PRESET)
        .then((res) => {
          axios({
            method: 'put',
            url: `${baseURL}/api/users/${store.getState().user.profile.id}`,
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
            data: {
              avatar: res.data.url,
            },
            withCredentials: true,
          })
            .then((response) => {
              // Stores the avatar url in session
              sessionStorage.setItem('avatar', response.data.avatar);
              store.dispatch(updateProfileSuccess());
              store.dispatch(getUser(store.getState().user.profile.id));
            })
            .catch((err) => {
              store.dispatch(updateProfileError([`Erreur serveur ! ${err}`]));
            });
        })
        .catch(() => {
          // TODO: handle error message if the upload can't be done
        });
      break;
    case UPLOAD_SERVICE_IMAGE:
      uploadImage(action.payload, IMAGE_PRESET)
        .then((res) => {
          store.dispatch(addService({
            user: parseInt(sessionStorage.getItem('id'), 10),
            image: res.data.url,
          }));
        })
        .catch(() => {
          // TODO: handle error message if the upload can't be done
        });
      break;
    default:
      return next(action);
  }
};

export default uploadsMiddleware;
