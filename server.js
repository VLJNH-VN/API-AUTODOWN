const express = require('express');
const MediaDownloader = require('media-downloader');

const app = express();
const port = 3000;
const downloader = new MediaDownloader();

app.get('/download', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ success: false, message: 'Bạn cần nhập URL video!' });
    }

    try {
        const data = await downloader.fetchMediaInfo(url);
        res.json(data);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port}`);
});
