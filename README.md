• HasOne – the foreign key references the child model. The attribute is defined on the parent model.
• BelongsTo – the foreign key references the parent model. The attribute is defined on the child model.
• HasMany – where the foreign key references the parent model. The attribute is defined on the child model.
• BelongsToMany – where a separate model (called a junction table) will store the references of the associated models.

• One-to-One – We would use the hasOne and belongsTo associations together.
• One-to-Many – The hasMany and belongsTo associations are used for this pattern.
• Many-to-Many – Two belongsToMany associations are used for this pattern.

A.hasOne(B, {
onUpdate: 'SET NULL',
onDelete: 'CASCADE',
foreignKey: 'otherId',
sourceKey: '',
targetKey: ''
});
B.belongsTo(A);

One to many relationship
---------------------
Employees that belonged to Organization.

Organization.hasMany(Employee);
Employee.belongsTo(Organization);

The hasOne and hasMany associations will reference themselves from the Parent model (target model) to the Child model(source model);

The belongsTo association will reference the Parent model,

Many to many relationship
---------------------
Employees can work on multiple tasks and tasks can require many employees:

Employee.belongsToMany(Task, { through: 'EmployeeTasks' });
Task.belongsToMany(Employee, { through: 'EmployeeTasks' });

Using hasOne
------------
The following code will create an attribute called actorName on the Roles model,

Actor.hasOne(Role, {
sourceKey: 'name',
foreignKey: 'actorName'
});

Using hasMany
----------------
The following code will create an attribute called roleTitle on the Costumes model

Roles.hasMany(Costumes, {
sourceKey: 'title',
foreignKey: 'roleTitle'
});

Using belongsTo
--------------
referencing from the source model

Roles.belongsTo(Actors, {
targetKey: 'name',
foreignKey: 'actorName'
});

Using belongsToMany
-------------------

accepts both the target and the source keys as parameters to configure the references.

Costumes.belongsToMany(Actors, {
through: 'actor_costumes',
sourceKey: 'name',
targetKey: 'wardrobe'
});

