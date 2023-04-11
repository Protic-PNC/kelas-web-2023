let data = ['Teknik Informatika', 'Teknik Elektro', 'Teknik Mesin'];

function tampil() {
  let tabel = document.getElementById('tabel');
  tabel.innerHTML = '<tr><th>No</th><th>Jurusan</th><th>Action</th></tr>';
  for (let i = 0; i < data.length; i++) {
    let btnEdit = `<button class="btn-edit" onclick="edit(${i})">Edit</button>`;
    let btnHapus = `<button class="btn-hapus" onclick="hapus(${i})">Hapus</button>`;
    j = i + 1;
    tabel.innerHTML += `<tr><td>${j}</td><td>${data[i]}</td><td>${btnEdit}${btnHapus}</td></tr>`;
  }
}

function tambah() {
  const input = document.querySelector('input[name=jurusan]');
  data.push(input.value);
  tampil();
}

function edit(id) {
  const baru = prompt('Edit Jurusan', data[id]);
  data[id] = baru;
  tampil();
}

function hapus(id) {
  data.splice(id, 1);
  tampil();
}

tampil();
