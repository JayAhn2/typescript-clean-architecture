import { Column, Entity, PrimaryColumn } from 'typeorm';
import { PostStatus } from '../../../../../../core/common/enums/PostEnums';
import { UserRole } from '../../../../../../core/common/enums/UserEnums';

@Entity('post')
export class TypeOrmPost {
  
  @PrimaryColumn()
  public id: string;
  
  @Column()
  public ownerId: string;
  
  @Column()
  public title: string;
  
  @Column()
  public imageId: string;
  
  @Column()
  public content: string;
  
  @Column()
  public status: PostStatus;
  
  @Column()
  public createdAt: Date;
  
  @Column()
  public editedAt: Date;
  
  @Column()
  public publishedAt: Date;
  
  @Column()
  public removedAt: Date;
  
  public owner: {id: string, name: string, role: UserRole};
  
  public image?: {id: string, relativePath: string};
  
}
