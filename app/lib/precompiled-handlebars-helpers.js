/* global Handlebars: */

export function getPrecompiledHandlebarsTemplate(rawTemplateIdentifier) {
  let identifier = `assets${rawTemplateIdentifier}`;
  if (Handlebars.templates[identifier]) {
    return Handlebars.templates[identifier];
  }
}

export function executePrecompiledHandlebarsTemplate(rawTemplateIdentifiers, context) {
  context = context || {};

  if (!Handlebars.templates) {
    return '[MISSING TEMPLATES]';
  }

  for (let i = 0; i < rawTemplateIdentifiers.length; i++) {
    let template = getPrecompiledHandlebarsTemplate(rawTemplateIdentifiers[i]);
    if (template) {
      return template(context);
    }
  }

  return '[MISSING TEMPLATE]';
}
