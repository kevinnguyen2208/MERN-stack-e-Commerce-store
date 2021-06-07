import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { detailsUser } from '../actions/userActions';

export default function ProfileScreen(){
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    

    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch (detailsUser());
    },[]
    );
    return(
        <div>
        <div>
          <h1>User Profile</h1>
        </div>
            <div>
              Name : {userInfo.name}
            </div>
            <div>
              Email : {userInfo.email}
            </div>
             </div>
    )
}