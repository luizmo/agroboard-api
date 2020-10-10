module.exports = {
  before: {
    all: [
      (hook) => {
        hook.params.sequelize = {
          include: [{ model: hook.app.services['machine-model'].Model }]
       };
      }
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [ (context) => {
      const machineId = context.id;
      const parts = context.data.parts;
    }],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
