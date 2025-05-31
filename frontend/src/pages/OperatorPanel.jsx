import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function OperatorPanel() {
  const [loketId, setLoketId] = useState(1)
  const [pelayanan, setPelayanan] = useState('pin')
  const [antrian, setAntrian] = useState([])
  const [dipanggil, setDipanggil] = useState(null)

  useEffect(() => {
    fetchAntrian()
    // eslint-disable-next-line
  }, [pelayanan])

  const fetchAntrian = async () => {
    const res = await axios.get(`/api/antrian/list?pelayanan=${pelayanan}`)
    setAntrian(res.data.filter(x => x.status === 'menunggu'))
  }

  const handlePanggil = async () => {
    const res = await axios.post('/api/antrian/panggil', { loketId })
    setDipanggil(res.data.nomor)
    fetchAntrian()
  }

  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <h2>Panel Operator</h2>
      <div>
        <label>Layanan:</label>
        <select value={pelayanan} onChange={e => setPelayanan(e.target.value)}>
          <option value="pin">Pengambilan PIN</option>
          <option value="verifikasi">Verifikasi Berkas & Kesehatan</option>
        </select>
        <label style={{ marginLeft: 20 }}>ID Loket:</label>
        <input type="number" value={loketId} onChange={e => setLoketId(Number(e.target.value))} min={1} max={10} style={{ width: 60 }}/>
      </div>
      <button onClick={handlePanggil} style={{ marginTop: 15 }}>Panggil Nomor Berikutnya</button>
      {dipanggil && <div style={{ fontSize: 24, margin: 10 }}>Memanggil: <b>{dipanggil}</b></div>}
      <h3 style={{ marginTop: 30 }}>Daftar Antrian Menunggu</h3>
      <ol>
        {antrian.map(a => <li key={a.id}>{a.nomor} - {a.nama}</li>)}
      </ol>
    </div>
  )
}
