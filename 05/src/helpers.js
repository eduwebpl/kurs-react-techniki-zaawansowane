import axios from 'axios';

export const createPlaceholderImage = (size) => `https://bulma.io/images/placeholders/${size}x${size}.png`;

export const fetchData = async (api, dataSetter, errorSetter = null) => {
  try {
    errorSetter(false);
    const { data } = await axios.get(api);

    dataSetter(data);
  }
  catch (err) {
    errorSetter(true);
  }
}