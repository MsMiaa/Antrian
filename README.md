# Sistem Antrian Online SPMB SMKN 1 Grati

Sistem ini adalah aplikasi antrian online untuk kegiatan SPMB di SMKN 1 Grati. Dibangun dengan:
- **Backend:** Node.js + Express + Sequelize (MySQL)
- **Frontend:** React (Vite)
- **Realtime:** Socket.io
- **Text-to-Speech:** Web Speech API (browser)

## Struktur Proyek

```
antrian-spmb-smkn1grati/
├── backend/
├── frontend/
├── package.json
├── README.md
```

## Cara Instalasi & Menjalankan

### 1. Clone Repository

```bash
git clone <repo-url>
cd antrian-spmb-smkn1grati
```

### 2. Jalankan Backend

Edit konfigurasi database di `backend/config/database.js` atau gunakan environment variable:
- `DB_NAME`
- `DB_USER`
- `DB_PASS`
- `DB_HOST`

Masuk ke folder backend:

```bash
cd backend
npm install
node server.js
```

### 3. Jalankan Frontend (di terminal baru)

```bash
cd frontend
npm install
npm run dev
```

Frontend akan berjalan di [http://localhost:5173](http://localhost:5173), backend di [http://localhost:3000](http://localhost:3000).

### 4. Jalankan Bersamaan (opsional)

Dari root project:

```bash
npm install
npm run dev
```

### 5. Setup Database

Pastikan database MySQL sudah berjalan. Database dan tabel akan otomatis dibuat saat backend pertama kali dijalankan.

## Fitur

- Pengambilan nomor antrian online oleh siswa
- Panel operator untuk 10 operator & 2 jenis layanan (Pengambilan PIN, Verifikasi Berkas & Kesehatan)
- Layar Aula (real-time, otomatis suara panggilan)
- Panel admin (bisa dikembangkan, default: manajemen lewat database/manual)

## Pengembangan Lanjutan

- Tambahkan autentikasi (login) untuk admin/operator
- Panel admin untuk manajemen data, reset antrian
- Deploy ke server sekolah/cloud

## Kontak & Kontribusi

Silakan hubungi pengembang atau buka issue pada repository ini untuk bantuan dan pengembangan lebih lanjut.

---
