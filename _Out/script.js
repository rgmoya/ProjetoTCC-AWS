document.getElementById('uploadForm').addEventListener('submit', function (e) {
  var fileInput = document.getElementById('imageUpload');
  var file = fileInput.files[0];
  if (file) {
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validImageTypes.includes(file.type)) {
      alert('Por favor, selecione uma imagem válida (JPEG, PNG, GIF).');
      e.preventDefault();
      return;
    }

    var keyInput = document.querySelector('input[name="key"]');
    keyInput.value = 'imagens/' + file.name;
  } else {
    alert('Por favor, selecione um arquivo.');
    e.preventDefault();
  }
});