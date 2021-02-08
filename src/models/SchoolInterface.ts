interface SchoolInterface {
    id: number;
    school_name: string;
    street: string;
    number: number;
    district: string;
    complement: string;
    email: string;
    phone_number: number;
    latitude?: number;
    longitude?: number;
}

export default SchoolInterface;
