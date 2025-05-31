import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

export default function LayarAula() {
  const [antrian, setAntrian] = useState(null)

  useEffect(() => {
    socket.on('panggilan', (data) => {
      setAntrian(data)
      // TTS otomatis
      window.speechSynthesis.speak(
        new SpeechSynthesisUtterance(
          `Nomor ${data.nomor}, silakan ke Loket ${data.loketId}`
        )
      )
    })
    // Clean up
    return () => socket.off('panggilan')
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <div style={{ fontSize: 32, marginBottom: 20 }}>Antrian Sedang Dipanggil</div>
      <div style={{ fontSize: 80, fontWeight: 700, color: '#0078d7' }}>
        {antrian ? antrian.nomor : '--'}
      </div>
      <div style={{ fontSize: 28, marginTop: 20 }}>
        Layanan: <b>{antrian ? (antrian.pelayanan === 'pin' ? 'Pengambilan PIN' : 'Verifikasi Berkas & Kesehatan') : '-'}</b>
      </div>
      <div style={{ fontSize: 28, marginTop: 10 }}>
        Loket: <b>{antrian ? antrian.loketId : '-'}</b>
      </div>
    </div>
  )
}
