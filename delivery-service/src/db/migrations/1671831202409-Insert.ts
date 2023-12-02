import { MigrationInterface, QueryRunner } from "typeorm";

export class Insert1671831202409 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            INSERT INTO public.biker
            ("name", email, "password")
            VALUES 
            ('mohamed', 'mohamed@gmail.com', 'mohamed'),
            ('ahmed', 'ahmed@gmail.com', 'ahmed'),
            ('islam', 'islam@gmail.com', 'islam'),
            ('mona', 'mona@gmail.com', 'mona'),
            ('ziad', 'ziad@gmail.com', 'ziad'),
            ('noha', 'noha@gmail.com', 'noha'),
            ('mostafa', 'mostafa@gmail.com', 'mostafa'),
            ('tarek', 'tarek@gmail.com', 'tarek'),
            ('koko', 'koko@gmail.com', 'koko'),
            ('yasser', 'yasser@gmail.com', 'yasser');
        `);

    queryRunner.query(`
        INSERT INTO public.sender
        ("name", email, "password")
        VALUES 
        ('salma', 'salma@gmail.com', 'salma'),
        ('gamal', 'gamal@gmail.com', 'gamal'),
        ('islam', 'islam@gmail.com', 'islam'),
        ('mona', 'mona@gmail.com', 'mona'),
        ('ziad', 'ziad@gmail.com', 'ziad');
    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
