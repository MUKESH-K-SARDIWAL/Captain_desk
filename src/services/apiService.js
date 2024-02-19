
import { base_url } from './env';

export async function getData(url) {
    let apiUrl = base_url + url;
    // let token = await AsyncStorage.getItem('token') == null ? '' : 'Bearer'.concat(await AsyncStorage.getItem('token'));
    // return axios.get(apiUrl, { headers: { "Accept": "*/*", "Content-Type": "multipart/form-data" } })
    return await fetch(apiUrl, { headers: { "Accept": "*/*", "Content-Type": "multipart/form-data" } })

}

export async function postData(url, data) {
    let apiUrl = base_url + url;
    await fetch(apiUrl,
        {
            method: 'POST',
            headers: { "Accept": "*/*", "Content-Type": "multipart/form-data" },
            body: data,
        })

}

export async function DeleteData(url) {

    let apiUrl = base_url + url;

    // let token = await AsyncStorage.getItem('token') == null ? '' : 'Bearer'.concat(await AsyncStorage.getItem('token'));

    // return await axios.delete(apiUrl, { headers: { "Accept": "*/*", "Content-Type": "multipart/form-data" } })

}