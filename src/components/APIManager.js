const apiKey = '1P2IShy91gDLXOmgRvgvDVIk94PkJYPs';
const baseUrl = new URL('https://api.giphy.com/v1/gifs/');
const blockSize = 20;

function getUrl(url, query) {
  const result = new URL(url);
  const callback = (x) => result.searchParams.set(x, query[x]);
  if (query) Object.keys(query).forEach(callback);
  return result;
}

async function makeRequest(url) {
  const request = new Request(url, { cache: 'default' });
  const result = (await fetch(request)).json();
  const { data } = await result;
  return data;
}

function getGifModel(data) {
  return {
    smallImage: data.images.fixed_height,
    fullImage: data.images.original,
    id: data.id,
    title: data.title ? data.title : null,
    time: data.import_datetime ? data.import_datetime : null,
    username: data.username ? data.username : null,
    avatarUrl: data.user ? data.user.avatar_url : null,
  };
}

function getMultipleGifs(data) {
  return data.map(getGifModel);
}

let instance = null;

export default class APIManager {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.currentGifs = [];
    this.displayedCount = 0;
    this.gifInfo = {};
    return instance;
  }

  async load(request) {
    const url = getUrl(`${baseUrl}search`,
      {
        api_key: apiKey,
        q: request,
        limit: blockSize,
        offset: this.currentGifs.length,
        rating: 'G',
        lang: 'en',
      });
    const result = await makeRequest(url);
    this.currentGifs = result.length ? this.currentGifs.concat(getMultipleGifs(result)) : [];
  }

  async loadById(id) {
    const url = getUrl(`${baseUrl}${id}`, { api_key: apiKey });
    const result = await makeRequest(url);
    this.gifInfo = getGifModel(result);
  }

  increasedisplayedCount() {
    this.displayedCount += 1;
  }

  eraseGifs() {
    this.currentGifs = [];
    this.displayedCount = 0;
  }
}
