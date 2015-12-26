const ApiUtils = {
  checkStatus: function(response) {
    // https://github.com/github/fetch
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
};

export default ApiUtils
