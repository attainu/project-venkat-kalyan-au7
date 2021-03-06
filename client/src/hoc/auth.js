import React, { useEffect } from 'react';
import { auth } from '../Redux/_actions/userActions';
import { useSelector, useDispatch } from "react-redux";

export default function (ComposedClass, reload, ) {
    function AuthenticationCheck(props) {

        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {
                if (!response.payload.isAuth) {
                    if (reload) {
                        props.history.push('/login')
                    }
                }

                    else {
                        if (reload === false) {
                            props.history.push('/')
                        }
                    }
                
            })
            
        }, [])

        return (
            <ComposedClass {...props} user={user} />
        )
    }
    return AuthenticationCheck
}