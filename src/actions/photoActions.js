/*This file hold our Course related Action Creators*/
import * as types from './actionTypes';
import PhotoApi from '../api/mockPhotoApi';
// import PhotoApi from '../api/realPhotoApi';
// import axios from 'axios';
// import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

/*export function createCourse(course){
  return { type: types.CREATE_COURSE, course};
}*/
export function loadPhotosSussess(photos){
  return { type: types.LOAD_PHOTOS_SUCCESS, photos};
}

/*export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}
*/

/*Thunk*/
// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.

export function loadPhotos(){
  return function(dispatch){
    // dispatch(beginAjaxCall());
    return PhotoApi.getAllPhotos()
    .then(photos => {
      dispatch(loadPhotosSussess(photos));
    }).catch(error => {
      throw(error);
    });
  };
}

/*using Axios*/

/*const PHOTO_URL = 'http://jsonplaceholder.typicode.com';

export function loadPhotos(){
  return function(dispatch){
    // dispatch(beginAjaxCall());
    return axios(`${PHOTO_URL}`)
    .then(photos => {
      dispatch(loadPhotosSussess(photos));
    }).catch(error => {
      throw(error);
    });
  };
}*/

/*export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return CourseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
*/
