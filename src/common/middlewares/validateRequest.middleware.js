export const validateRequest = (schema, source = 'body') => {
  return async (req, res, next) => {
    try {
      const dataToValidate = req[source];
      const validatedData = await schema.parseAsync(dataToValidate);
      
      // Guardar los datos validados en el request para que el controller los use
      req.validatedData = req.validatedData || {};
      req.validatedData[source] = validatedData;
      
      // Si es body, sobrescribir req.body con los datos validados
      if (source === 'body') {
        req.body = validatedData;
      }
      
      next();
    } catch (error) {
      // Formatear errores de Zod
      if (error.errors) {
        const formattedErrors = error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }));
        return res.status(400).json({ 
          error: 'Validation failed',
          details: formattedErrors 
        });
      }
      
      res.status(400).json({ 
        error: 'Validation failed',
        details: error.message 
      });
    }
  };
};

export const validateBody = (schema) => validateRequest(schema, 'body');

export const validateParams = (schema) => validateRequest(schema, 'params');

export const validateQuery = (schema) => validateRequest(schema, 'query');
