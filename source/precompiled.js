(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['pin.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "pin--disabled";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <select class=\"board-select\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"boards") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":10,"column":15}}})) != null ? stack1 : "")
    + "    </select>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "    <p>Доступных досок нет</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "    <p class=\"pin-text\">Some description about the image.</p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"user-icon\">\n      <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"userIcon") || (depth0 != null ? lookupProperty(depth0,"userIcon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"userIcon","hash":{},"data":data,"loc":{"start":{"line":31,"column":16},"end":{"line":31,"column":28}}}) : helper)))
    + "\" alt=\"User Icon\" />\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pin "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":16},"end":{"line":1,"column":52}}})) != null ? stack1 : "")
    + "\">\n  <div class=\"pin-image\">\n    <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"pinUrl") || (depth0 != null ? lookupProperty(depth0,"pinUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pinUrl","hash":{},"data":data,"loc":{"start":{"line":3,"column":14},"end":{"line":3,"column":24}}}) : helper)))
    + "\" alt=\"Pin Image\" class=\"pin-image\" />\n  </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"boards") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":14,"column":9}}})) != null ? stack1 : "")
    + "\n  <!-- Контейнер для кнопки \"Сохранить на доску\" -->\n  <div class=\"save-pin-container\"></div>\n\n  <!-- Контейнер для иконки \"Поделиться\" -->\n  <div class=\"share-pin-container\"></div>\n\n  <!-- Контейнер для иконки \"Меню\" -->\n  <div class=\"menu-pin-container\"></div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showText") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":2},"end":{"line":27,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"userIcon") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":2},"end":{"line":33,"column":9}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['button.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"pin-text\">Your text here</div> <!-- Отображение текста под изображением -->\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"user-icon\">\n            <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"userIcon") || (depth0 != null ? lookupProperty(depth0,"userIcon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"userIcon","hash":{},"data":data,"loc":{"start":{"line":22,"column":22},"end":{"line":22,"column":34}}}) : helper)))
    + "\" alt=\"User Icon\" />\n        </div> <!-- Отображение иконки пользователя -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pin\" style=\"width: 120px; height: 120px;\">\n    <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"pinUrl") || (depth0 != null ? lookupProperty(depth0,"pinUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pinUrl","hash":{},"data":data,"loc":{"start":{"line":2,"column":14},"end":{"line":2,"column":24}}}) : helper)))
    + "\" alt=\"Pin Image\" class=\"pin-image\" />\n\n    <div class=\"dropdown-container\">\n        <select disabled>\n            <option value=\"\">Select a board</option>\n        </select>\n    </div>\n\n    <div class=\"button-container\">\n        <div class=\"save-pin-container\"></div> <!-- Кнопка для сохранения на доску -->\n        <div class=\"share-pin-container\"></div> <!-- Кнопка для поделиться -->\n        <div class=\"menu-pin-container\"></div>  <!-- Кнопка для раскрытия меню -->\n    </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showText") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"userIcon") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":24,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
})();