import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const schoolStorage = multer.diskStorage({
    destination: function(request, file, cb) {
        cb(null, path.resolve(__dirname, '..', '..', 'Uploads', 'schools'))},
    filename(request, file, callback) {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1E9);
        callback(null, unique + '-' + file.originalname  );
    }
})

export {
    schoolStorage
}