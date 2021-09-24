import { IStudent } from '../entities/Student';
import connection from '../database/connection';
import { IData } from '../services/UpdateStudentService';

class StudentData {

  async save(student: IStudent) {

    try {

      const trx = await connection.transaction();

      const newStudent = await trx('students').insert({
        id: student.id,
        name: student.name,
        email: student.email,
        password: student.password,
        school_id: student.schoolId,
        shift: student.shift,
        series: student.series,
        classe: student.classe,
        image: student.image,
        borndate: student.borndate,
        cpf: student.cpf,
        rg: student.rg,
        address: student.address,
        number: student.number,
        complement: student.complement,
        uf: student.uf,
        city: student.city,
        latitude: student.latitude,
        longitude: student.longitude
      }, ['*'])

      await trx.commit();

      return newStudent;

    } catch(err) {

      throw new Error(err);

    }
  }

  async checkEmail(email: string) {
    try {

      const trx = await connection.transaction();

      const student = await trx('students')
      .where("students.email", "=", email)
      .first()
      .select('*')
      await trx.commit();

      return student;

    } catch(err) {

      throw new Error(err);

    }
  }

  async show(id: string) {
    try {

      const trx = await connection.transaction();

      const student = await trx('students')
      .join('files', 'files.id', '=', 'students.image')
      .join('schools', 'schools.id', '=', 'students.school_id')
      .select('students.*', 'files.filename', 'schools.name as school')
      .where('students.id', id)

      await trx.commit();

      return student;

    } catch(err) {

      throw new Error(err);

    }
  }

  async update(id: string, data: IData) {
    try {

      const trx = await connection.transaction();

      const updatedSchool = await trx('students').where('id', '=', id)
        .update(data, ['*'])

        await trx.commit();

      return updatedSchool;


    } catch (err) {

      throw new Error(err);

    }
  }
}

export { StudentData }
