import connection from '../database/connection';

class StudentsRoutesData {

  async save(id: string, studentId: string, routeId: string) {

    try {

      const trx = await connection.transaction();

      const newStudentRoute = await trx('students_routes').insert({
        id: id,
        student_id: studentId,
        route_id: routeId
      }, ['*'])

      await trx.commit();

      return newStudentRoute;

    } catch (err) {

      throw new Error(err);

    }
  }

  async countStudents(routeId: string) {

    try {

      const trx = await connection.transaction();

      const studentsCount = await trx('students_routes')
      .count('route_id')
      .where('students_routes.route_id', routeId);

      await trx.commit();

      return studentsCount;

    } catch (err) {

      throw new Error(err);

    }
  }

  // async show(id: string) {
  //   try {

  //     const trx = await connection.transaction();

  //     const routesPoints = await trx('routes_points')
  //     .join('points', 'routes_points.point_id', '=', 'points.id')
  //     .select('routes_points.*', 'points.*')
  //     .where('routes_points.route_id', id)

  //     await trx.commit();

  //     return routesPoints;

  //   } catch (err) {

  //     throw new Error(err);

  //   }

  // }

  // async index() {
  //   try {

  //     const trx = await connection.transaction();

  //     const routesPoints = await trx('routes_points')
  //       .join('points', 'routes_points.point_id', '=', 'points.id')
  //       .select('routes_points.*', 'points.*')

  //     await trx.commit();

  //     return routesPoints;

  //   } catch (err) {

  //     throw new Error(err);

  //   }

  // }

}

export { StudentsRoutesData };
