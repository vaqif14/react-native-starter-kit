import axios from 'axios';
import { ToastAndroid, NetInfo } from 'react-native';
import logger from './logger';

function NetworkError(net) {
  ToastAndroid.showWithGravity(
    'Esse dispositivo está off-line ou a conexão está lenta. Verifique se seu dispositivo encontra-se conectado e tente novamente.',
    ToastAndroid.LONG,
    ToastAndroid.CENTER,
  );
  return net;
}

async function verify(response) {
  try {
    const net = await NetInfo.getConnectionInfo();
    const { type } = net;
    if (type === 'none') {
      throw new NetworkError(net);
    }
    return response();
  } catch (err) {
    logger('utils/client verify, err', err);
    return false;
  }
}

export async function post(url, payload, token = false) {
  return verify(() => {
    let config = {};
    logger('post', { url, payload, token });
    if (token) {
      config = {
        headers: {
          'X-Auth': token,
        },
      };
    }
    return axios.post(url, payload, config);
  });
}

export async function get(url, token = null) {
  return verify(() => {
    logger('get', { url, token });
    const config = {
      headers: {
        'X-Auth': token,
      },
    };
    return axios.get(url, config);
  });
}

export function put(url, payload, token = false) {
  return verify(() => {
    let config = {};
    logger('put', { url, payload, token });
    if (token) {
      config = {
        headers: {
          'X-Auth': token,
        },
      };
    }

    return axios.put(url, payload, config);
  });
}
