// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Basic_concepts
// great site for practicing working with the JSON format: https://jsoneditoronline.org/

{
  const pageTitle = 'debug these';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
}

try {


  function debugMe1() {

    const requestURL = "https://hackyourfuture.be/practice-api/food/dry/granes.json";

    fetch(requestURL)
      .then(function parseResponse(resp) { return resp.json() })
      .then(function workWithData(data) {
        return data.varieties.filter(x => x[0] === 'b');
      })
      .then(function assertResult(result) {
        console.assert(JSON.stringify(result) === '["bulgar","barley"]', 'grains beginning with "b"');
      })
      .catch(function handleErrors(err) {
        console.error(err)
      });

    return requestURL;

  }
  fetching(debugMe1);

  function debugMe2() {

    const requestURL = "https://hackyourfuture.be/practice-api/food/wet/soups.json";

    fetch(requestURL)
      .then(function parseResponse(resp) { return JSON.parse(resp) })
      .then(function workWithData(data) {
        return Object.keys(data)
          .filter(key => data[key] === null)
          .reduce((acc, key) => acc + data[key], '');
      })
      .then(function assertResult(result) {
        console.assert(result === "null", 'the color purple');
      })
      .catch(function handleErrors(err) {
        console.error(err)
      });

    return requestURL;

  }
  fetching(debugMe2);

  function debugMe3() {

    const requestURL = "https://hackyourfuture.be/practice-api/animals/worms.json";

    fetch(requestURL)
      .then(function parseResponse(resp) { resp.json() })
      .then(function workWithData(data) {
        return Object.keys(data)
          .filter(key => data[key].indexOf('South America') !== -1);
      })
      .then(function assertResult(resp) {
        console.assert(JSON.stringify(result) === '["spotted","wavy"]', 'south american worms');
      })
      .catch(function handleErrors(err) {
        console.error(err)
      });

    return requestURL;

  }
  fetching(debugMe3);

  function debugMe4() {

    const requestURL = "https://hackyourfuture.be/practice-api/animals/fungi.js";

    fetch(requesURL)
      .then(function parseResponse(resp) { return resp.json() })
      .then(function workWithData(data) {
        return Object.keys(data)
          .reduce((acc, key) => acc.concat(...data[key]), '');
      })
      .then(function assertResult(result) {
        console.assert(result instanceof Array, 'result should be an array');
        console.assert(result.length === 14, 'with 14 items');
      })
      .catch(function handleErrors(err) {
        console.error(err)
      });

    return requestURL;

  }
  fetching(debugMe4);


} catch (err) {
  console.log(err);
  document.body.appendChild(
    fetching.errorSearchComponent(err)
  );
}

{
  document.body.appendChild(document.createElement('hr'));
}