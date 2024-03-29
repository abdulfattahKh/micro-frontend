import React, { useRef, useEffect } from 'react';
import { mount } from 'authApp/authIndex';
import { useHistory } from 'react-router-dom';
export default () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate({ pathname }) {
                if (pathname !== history.location.pathname) {
                    history.push(pathname);
                }
            },
            initialEntries: [history.location.pathname]
        });
        history.listen(onParentNavigate);
    }, []);
    return (
        <div ref={ref}></div>
    )


}