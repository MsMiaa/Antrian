import React, { useState } from 'react'
import axios from 'axios'

export default function AmbilNomor() {
  const [nama, setNama] = useState('')
  const [pelayanan, setPelayanan] = useState('pin')
  const [nomor, setNomor] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!nama) return
    const res = await axios.post('/api/antrian/ambil', { nama, pelayanan })
    setNomor(res.data.nomor)
  }

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Ambil Nomor Antrian</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Siswa:</label>
          <input value={nama} onChange={e => setNama(e.target.value)} required style={{ width: '100%' }}/>
        </div>
        <div>
          <label>Pilihan Layanan:</label>
          <select value={pelayanan} onChange={e => setPelayanan(e.target.value)} style={{ width: '100%' }}>
            <option value="pin">Pengambilan PIN</option>
            <option value="verifikasi">Verifikasi Berkas & Kesehatan</option>
          </select>
        </div>
        <button type="submit" style={{ marginTop: 15, width: '100%' }}>Ambil Nomor</button>
      </form>
      {nomor && (
        <div style={{ marginTop: 30, fontSize: 32, textAlign: 'center' }}>
          Nomor Antrian Anda: <b>{nomor}</b>
        </div>
      )}
    </div>
  )
}
