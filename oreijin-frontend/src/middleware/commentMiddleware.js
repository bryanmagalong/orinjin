import axios from 'axios';
import baseURL from '../axios';

import { getService } from '../actions/service';

import {
  ADD_COMMENT,
  addCommentSuccess,
} from '../actions/comments';

// eslint-disable-next-line consistent-return
const commentMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_COMMENT:
      axios({
        method: 'post',
        url: `${baseURL}/api/comments`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        data: {
          service: store.getState().services.service.id,
          user: parseInt(sessionStorage.getItem('id'), 10),
          body: store.getState().comments.reply,
          isBlocked: false,
        },
        withCredentials: true,
      })
        .then(() => {
          store.dispatch(addCommentSuccess());
          // to update comments list
          store.dispatch(getService(store.getState().services.service.id));
        })
        .catch(() => {
          // TODO: handle error message if comment can't be sent
        });
      break;
    default: return next(action);
  }
};

export default commentMiddleware;
