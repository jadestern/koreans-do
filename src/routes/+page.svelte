<script>
  import Hero from "./Hero.svelte";
  const THEMES_URL = 'https://sheets.googleapis.com/v4/spreadsheets/1-fRQjYHA1CMglowuomQks7GpETuSDI2P8QXrn33TQBY/values/%ED%85%8C%EB%A7%88?alt=json&key=AIzaSyBGmfyRxB3e0g3EhakIkgN9WWboHYmFgz0'

  const getThemes = async () => {
    const response = await fetch(THEMES_URL);
    const jsonData = await response.json();
    console.log(jsonData.values);
  }

  $ : {
    getThemes();
  }

</script>

<Hero />
