import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";



import { ObjectType, Field, ID, Root } from "type-graphql";



@ObjectType()
@Entity()
export class User extends BaseEntity {



  @Field(() => ID)



  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  
  
  username: string;

  

  @Field()

  @Column("text", { unique: true })

  email: string;

  @Field()
  name(@Root() parent: User): string {

    return `${parent.username}`;
  }

  @Column()
  

  password: string;
}