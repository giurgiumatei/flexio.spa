import { useEffect, useState } from 'react';
import authStore from '../store/auth';

const useAuthInfo = (authPropGetter, initialValue) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const authStoreSubscription = authStore.subscribe(authInfo => {
            setValue(authPropGetter(authInfo));
        });
        authStore.initAuthInfo();

        return () => authStoreSubscription.unsubscribe();
    }, []);

    return value;
};

export default useAuthInfo;