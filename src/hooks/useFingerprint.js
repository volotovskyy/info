import { useContext } from 'react';
import { FingerprintContext  } from '../utils';

export const useFingerprint = () => {
    return useContext(FingerprintContext)
}