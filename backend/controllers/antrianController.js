const { Antrian, Loket } = require('../models');

exports.ambilNomor = async (req, res) => {
  const { nama, pelayanan } = req.body;
  const count = await Antrian.count({ where: { pelayanan, createdAt: new Date().toDateString() } });
  const nomor = pelayanan === 'pin'
    ? `A-${String(count + 1).padStart(3, '0')}`
    : `B-${String(count + 1).padStart(3, '0')}`;
  const antrian = await Antrian.create({ nama, pelayanan, status: 'menunggu', nomor });
  res.json(antrian);
};

exports.listAntrian = async (req, res) => {
  const { pelayanan } = req.query;
  const data = await Antrian.findAll({ where: { pelayanan }, order: [['id', 'ASC']] });
  res.json(data);
};

exports.panggil = async (req, res) => {
  const { loketId } = req.body;
  const antrian = await Antrian.findOne({
    where: { status: 'menunggu', loketId },
    order: [['id', 'ASC']]
  });
  if (antrian) {
    antrian.status = 'dipanggil';
    await antrian.save();
    req.app.get('io').emit('panggilan', antrian);
    res.json(antrian);
  } else {
    res.status(404).json({ message: 'Tidak ada antrian.' });
  }
};

exports.selesai = async (req, res) => {
  const { antrianId } = req.body;
  const antrian = await Antrian.findByPk(antrianId);
  if (antrian) {
    antrian.status = 'selesai';
    await antrian.save();
    res.json(antrian);
  } else {
    res.status(404).json({ message: 'Data tidak ditemukan.' });
  }
};
