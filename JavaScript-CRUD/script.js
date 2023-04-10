let data = [];

function tampil() {
  let tabel = document.getElementById('tabel');
  tabel.innerHTML = '<tr><th>No</th><th>Jurusan</th><th>Action</th></tr>';
  for (let i = 0; i < data.length; i++) {
    let btnEdit = `<button class="btn-edit">Edit</button>`;
    let btnHapus = `<button class="btn-hapus">Hapus</button>`;
    j = i + 1;
    tabel.innerHTML += `<tr><td>${j}</td><td>${data[i]}</td><td>${btnEdit}${btnHapus}</td></tr>`;
  }
}

function tambah() {
  const input = document.querySelector('input[name=jurusan]');
  data.push(input.value);
  tampil();
}

tampil();
