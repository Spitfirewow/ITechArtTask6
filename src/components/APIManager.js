const apiKey = '1P2IShy91gDLXOmgRvgvDVIk94PkJYPs';
const baseUrl = new URL('https://api.giphy.com/v1/gifs/');
const blockSize = 20;

export default function APIManager() {
  this.currentGifs = [];
  this.currentDisplayed = 0;
  this.request = '';
  this.gifInfo = {};
}

function getUrl(url, info) {
  const result = new URL(url);
  const callback = (x) => result.searchParams.set(x, info[x]);
  if (info) Object.keys(info).forEach(callback);
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
  return data.map((item) => getGifModel(item));
}

APIManager.prototype.load = async function load() {
  const url = getUrl(`${baseUrl}search`,
    {
      api_key: apiKey,
      q: this.request,
      limit: blockSize,
      offset: this.currentGifs.length,
      rating: 'G',
      lang: 'en',
    });
  const result = await makeRequest(url);
  this.currentGifs = result.length ? this.currentGifs.concat(getMultipleGifs(result)) : [];
};

APIManager.prototype.loadById = async function loadById(id) {
  const url = getUrl(`${baseUrl}${id}`, { api_key: apiKey });
  const result = await makeRequest(url);
  this.gifInfo = getGifModel(result);
};

APIManager.prototype.increaseCurrentDisplayed = function increaseCurrentDisplayed() {
  this.currentDisplayed += 1;
};

APIManager.prototype.eraseGifs = function eraseGifs() {
  this.currentGifs = [];
  this.currentDisplayed = 0;
};

APIManager.prototype.setRequest = function setRequest(request) {
  this.request = request;
};
