(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['input.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "input--disabled";
},"3":function(container,depth0,helpers,partials,data) {
    return "input--error";
},"5":function(container,depth0,helpers,partials,data) {
    return "input--valid";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <label class=\"input-title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":40}}}) : helper)))
    + "</label>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "input-wrapper--with-left-icon";
},"11":function(container,depth0,helpers,partials,data) {
    return "input-wrapper--with-right-icon";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"input-icon-left\">\n        <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"leftIcon") || (depth0 != null ? lookupProperty(depth0,"leftIcon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"leftIcon","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":30}}}) : helper)))
    + "\" alt=\"left icon\" />\n      </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"17":function(container,depth0,helpers,partials,data) {
    return "aria-invalid=\"true\"";
},"19":function(container,depth0,helpers,partials,data) {
    return "aria-valid=\"true\"";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"input-icon-right\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"rightIconClickable") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":36},"end":{"line":25,"column":82}}})) != null ? stack1 : "")
    + " tabindex=\"0\">\n        <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"rightIcon") || (depth0 != null ? lookupProperty(depth0,"rightIcon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"rightIcon","hash":{},"data":data,"loc":{"start":{"line":26,"column":18},"end":{"line":26,"column":31}}}) : helper)))
    + "\" alt=\"right icon\" />\n      </div>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "role=\"button\"";
},"24":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"input-caption\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"caption") || (depth0 != null ? lookupProperty(depth0,"caption") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"caption","hash":{},"data":data,"loc":{"start":{"line":32,"column":31},"end":{"line":32,"column":42}}}) : helper)))
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"input-container "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":66}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"error") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":67},"end":{"line":1,"column":99}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"valid") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":100},"end":{"line":1,"column":132}}})) != null ? stack1 : "")
    + "\"></div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":4,"column":9}}})) != null ? stack1 : "")
    + "\n  <div class=\"input-wrapper "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"leftIcon") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":28},"end":{"line":6,"column":80}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"rightIcon") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":81},"end":{"line":6,"column":135}}})) != null ? stack1 : "")
    + "\">\n    \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"leftIcon") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "\n    <input\n      type=\"text\"\n      class=\"input-field\"\n      placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":17,"column":19},"end":{"line":17,"column":34}}}) : helper)))
    + "\"\n      value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":18,"column":13},"end":{"line":18,"column":22}}}) : helper)))
    + "\"\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":19,"column":37}}})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"error") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":20,"column":45}}})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"valid") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":21,"column":43}}})) != null ? stack1 : "")
    + "\n    />\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"rightIcon") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":28,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"caption") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":2},"end":{"line":33,"column":9}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();