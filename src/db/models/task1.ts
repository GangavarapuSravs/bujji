import { DataTypes, Model, Optional } from "sequelize";
import sequelizeconnection from "../config";

interface StudentAttributes {
    Id: number;
    name: string;
    email: string;
    address: string;
}

export interface StudentInput extends Optional<StudentAttributes, 'Id'> {}
export interface studentOutput extends Required<StudentAttributes> {}

class Student extends Model<StudentAttributes, StudentInput> implements StudentAttributes {
    public Id!: number;
    public name!: string;
    public email!: string;
    public address!:string;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Student.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'Student',
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    }
);

export default Student;


