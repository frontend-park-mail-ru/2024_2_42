(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
<<<<<<< HEAD
templates['pin.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "      <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pin\">\n  <select class=\"pin__board-selector\">\n    <option value=\"\">Select Board</option>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"boards") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":6,"column":13}}})) != null ? stack1 : "")
    + "  </select>\n\n  <div class=\"pin__save-button\"></div>\n\n  <div class=\"pin__image\">\n    <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"pinUrl") || (depth0 != null ? lookupProperty(depth0,"pinUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pinUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":14},"end":{"line":12,"column":24}}}) : helper)))
    + "\" alt=\"Pin Image\" class=\"pin-image\" />\n  </div>\n\n  <div class=\"pin__button-left-bottom\"></div>\n  <div class=\"pin__button-right-bottom\"></div>\n</div>";
},"useData":true});
=======
<<<<<<< HEAD
>>>>>>> dev
templates['button.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"3":function(container,depth0,helpers,partials,data) {
    return "active";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
=======
templates['input.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "input-error";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <label class=\"input__label\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"inputLabelText") || (depth0 != null ? lookupProperty(depth0,"inputLabelText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputLabelText","hash":{},"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":50}}}) : helper)))
    + "</label>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
>>>>>>> 9293db96759b9f4fcac84ba8f0e2befc947ad056
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <span class=\"input__icon input__icon-left\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"inputImageLeft") || (depth0 != null ? lookupProperty(depth0,"inputImageLeft") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputImageLeft","hash":{},"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":10,"column":28}}}) : helper))) != null ? stack1 : "")
    + " <!-- Вставка SVG-кода для левой иконки -->\r\n      </span>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "input__text-padding-left";
},"9":function(container,depth0,helpers,partials,data) {
<<<<<<< HEAD
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <span class=\"button-icon-left\">\r\n        <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"iconLeft") || (depth0 != null ? lookupProperty(depth0,"iconLeft") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"iconLeft","hash":{},"data":data,"loc":{"start":{"line":9,"column":18},"end":{"line":9,"column":30}}}) : helper)))
    + "\" alt=\"left icon\" />\r\n      </span>\r\n";
=======
    return "input__text-padding-right";
>>>>>>> dev
},"11":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <span class=\"input__icon input__icon-right\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"inputImageRight") || (depth0 != null ? lookupProperty(depth0,"inputImageRight") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputImageRight","hash":{},"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":24,"column":29}}}) : helper))) != null ? stack1 : "")
    + " <!-- Вставка SVG-кода для правой иконки -->\r\n      </span>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

<<<<<<< HEAD
  return "      <span class=\"button-icon-right\">\r\n        <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"iconRight") || (depth0 != null ? lookupProperty(depth0,"iconRight") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"iconRight","hash":{},"data":data,"loc":{"start":{"line":17,"column":18},"end":{"line":17,"column":31}}}) : helper)))
    + "\" alt=\"right icon\" />\r\n      </span>\r\n";
=======
  return "    <div class=\"input__helper-text\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"inputHelperText") || (depth0 != null ? lookupProperty(depth0,"inputHelperText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputHelperText","hash":{},"data":data,"loc":{"start":{"line":30,"column":36},"end":{"line":30,"column":55}}}) : helper)))
    + "</div>\r\n";
>>>>>>> dev
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"input-container "
    + alias4(((helper = (helper = lookupProperty(helpers,"inputSize") || (depth0 != null ? lookupProperty(depth0,"inputSize") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputSize","hash":{},"data":data,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":41}}}) : helper)))
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"Error") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":42},"end":{"line":1,"column":73}}})) != null ? stack1 : "")
    + "\">\r\n  \r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputLabelText") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"input-icons-wrapper\" style=\"position: relative;\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputImageLeft") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "\r\n    <input \r\n      type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"typeOfInput") || (depth0 != null ? lookupProperty(depth0,"typeOfInput") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeOfInput","hash":{},"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":15,"column":27}}}) : helper)))
    + "\" \r\n      class=\"input "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputImageLeft") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":19},"end":{"line":16,"column":72}}})) != null ? stack1 : "")
    + " "
<<<<<<< HEAD
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"hover") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":105},"end":{"line":1,"column":138}}})) != null ? stack1 : "")
    + "\">\r\n  <button\r\n    class=\"button "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":26}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"buttonColor") || (depth0 != null ? lookupProperty(depth0,"buttonColor") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonColor","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":42}}}) : helper)))
    + "\"\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":35}}})) != null ? stack1 : "")
    + "\r\n    aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":5,"column":25}}}) : helper)))
    + "\"\r\n  >\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"iconLeft") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "\r\n    <span class=\"button-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":13,"column":31},"end":{"line":13,"column":40}}}) : helper)))
    + "</span>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"iconRight") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "  </button>\r\n</div>";
=======
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputImageRight") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":73},"end":{"line":16,"column":128}}})) != null ? stack1 : "")
    + "\" \r\n      placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputPlaceholder") || (depth0 != null ? lookupProperty(depth0,"inputPlaceholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputPlaceholder","hash":{},"data":data,"loc":{"start":{"line":17,"column":19},"end":{"line":17,"column":39}}}) : helper)))
    + "\" \r\n      value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputValue") || (depth0 != null ? lookupProperty(depth0,"inputValue") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputValue","hash":{},"data":data,"loc":{"start":{"line":18,"column":13},"end":{"line":18,"column":27}}}) : helper)))
    + "\" \r\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":19,"column":39}}})) != null ? stack1 : "")
    + " \r\n      oninput=\"this.dispatchEvent(new CustomEvent('input-change', { detail: this.value }))\" />\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputImageRight") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":26,"column":11}}})) != null ? stack1 : "")
    + "  </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputHelperText") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":2},"end":{"line":31,"column":9}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n";
>>>>>>> dev
},"useData":true});
})();
