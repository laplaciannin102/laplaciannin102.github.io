function showRika() {
    alert("test");
    var reader = new FileReader();
    reader.readAsText("../assets/txt/rika.txt");
    var rika = reader.result;
    document.write(rika);
  };