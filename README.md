

### 后勤采购、领用、费用结算与统计

#### 创建数据库store_manage

```sql
create database store_manage;
```
#### 使用该数据库
```sql
 use store_manage;
```
#### 采购表
> id，物品类别id，物品id，数量，总价采购人员id，采购时间，备注

```sql
    create table t_order(
        order_id int auto_increment primary key,
        good_cate_id varchar(30) not null,
        good_id int not null,
        buy_nums int default 0,
        user_id int not null,
        buy_time timestamp default now(),
        t_desc varchar(200) 
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
#### 库存表
> id,物品id，库存，更新时间，备注
```sql
   create table t_order_counts (
        counts_id int auto_increment primary key,
        good_id int not null,
        good_counts int default 0,
        update_time timestamp default now(),
        t_desc varchar(200)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
#### 人员表
> 工号，名称，联系方式，家庭住址，所属部门id，性别，备注

```sql
    create table t_user (
        user_id int auto_increment primary key,
        user_name varchar(30) not null,
        user_phone varchar(11) ,
        user_address varchar(30),
        dept_id int not null,
        user_sex varchar(2) not null,
        t_desc varchar(200)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;
);
```
#### 部门表
> id，名称，领导名称
```sql
    CREATE TABLE t_dept(
        dept_id int auto_increment primary key,
        dept_name varchar(30) NOT NULL,
        leader_id int NOT NULL
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
#### 领用表
>  id,领用人员工号,领用物品id,领用数量,领用日期

```sql
    create table t_go_use(
        id int auto_increment primary key,
        good_id int not null,
        user_id int not null,
        good_counts int not null default 0,
        get_time timestamp  default now(),
        t_desc varchar(200)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
#### 人员-部门-领导视图
```sql
    drop view user_dept_leader
    create view user_dept_leader
    as
    select u.user_id,u.user_name ,u.dept_id,u.user_phone,u.user_address,u.user_sex,u.t_desc
        ,d.dept_name,l.user_name as leader_name
    from t_user u,t_dept d,t_user l
    where u.dept_id = d.dept_id
    and d.leader_id = l.user_id
```

### 添加测试数据

#### 部门
```sql 
    insert into t_dept(dept_name,leader_id) value('技术部',1);
    insert into t_dept(dept_name,leader_id) value('产品部',2);
```
#### 人员
```sql
    insert into t_user(user_name,user_phone,user_address,dept_id,user_sex,t_desc) value('张宝奇','18080808080','沈阳建筑大学',1,'男','666');
    insert into t_user(user_name,user_phone,user_address,dept_id,user_sex,t_desc) value('王维鑫','160606060','沈阳建筑大学',2,'男','6666');
```





