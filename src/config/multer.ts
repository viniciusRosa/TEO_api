import multer from 'multer';
import path from 'path';
import { Normalize_image } from '../Utils/Normalize';

const schoolStorage = multer.diskStorage({
    destination: function(request, file, cb) {
        cb(null, path.resolve(__dirname, '..', '..', 'Uploads'))},
    filename(request, file, callback) {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1E9);
        callback(null, unique + '-' + Normalize_image(file.originalname)   );
    }
})

export {
    schoolStorage
}