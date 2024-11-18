(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['boards-list.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"boards") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":14,"column":17}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"savebox__board-selection savebox__board-selection-"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"BoardName") : depth0), depth0))
    + "\">\n                <input class=\"savebox__board-checkbox\" type=\"radio\" id=\"checkbox-"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"BoardName") : depth0), depth0))
    + "\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"BoardName") : depth0), depth0))
    + "\">\n                <div class=\"savebox__board-cover-container\">\n                    <img class=\"savebox__board-cover\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"BoardCoverUrl") : depth0), depth0))
    + "\" alt=\"cover\">\n                </div>\n                <label class=\"savebox__board-label\" for=\"checkbox-"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"BoardName") : depth0), depth0))
    + "\">"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"BoardName") : depth0), depth0)) != null ? stack1 : "")
    + "</label>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"Private") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":12,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                    <img class=\"savebox__board-private-icon\" src=\"./assets/icons/private.svg\" alt=\"private\">\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <p>Здесь будут отображены доски</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"savebox__boards-list\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"boards") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['button.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"3":function(container,depth0,helpers,partials,data) {
    return "active";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"iconLeft") || (depth0 != null ? lookupProperty(depth0,"iconLeft") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"iconLeft","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":39}}}) : helper)))
    + "\" alt=\"iconLeft\" />";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"iconRight") || (depth0 != null ? lookupProperty(depth0,"iconRight") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"iconRight","hash":{},"data":data,"loc":{"start":{"line":5,"column":28},"end":{"line":5,"column":41}}}) : helper)))
    + "\" alt=\"iconRight\" />";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"className") || (depth0 != null ? lookupProperty(depth0,"className") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":28}}}) : helper)))
    + " button "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":44}}}) : helper)))
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":45},"end":{"line":1,"column":76}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"active") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":77},"end":{"line":1,"column":104}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":106},"end":{"line":2,"column":26}}})) != null ? stack1 : "")
    + ">\n	"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"iconLeft") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":3,"column":65}}})) != null ? stack1 : "")
    + "\n	"
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":4,"column":10}}}) : helper)))
    + "\n	"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"iconRight") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":5,"column":68}}})) != null ? stack1 : "")
    + "\n</button>\n";
},"useData":true});
templates['icon-button.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"icon-button__content-container "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? lookupProperty(stack1,"className") : stack1), depth0))
    + "\">\n    <img class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? lookupProperty(stack1,"className") : stack1), depth0))
    + "\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? lookupProperty(stack1,"iconPath") : stack1), depth0))
    + "\">\n</div>\n";
},"useData":true});
templates['grid.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"feed__layout-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pins") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":4,"column":13}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['header.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"header__create-btn-container\">\n			"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? lookupProperty(stack1,"createButton") : stack1), depth0)) != null ? stack1 : "")
    + "\n		</div>\n		<div class=\"header__profile-container\">\n			<img class=\"header__profile-avatar\" src=\""
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? lookupProperty(stack1,"profileUrl") : stack1), depth0))
    + "\">\n		</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"header__login-btn-container\">\n			"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? lookupProperty(stack1,"loginButton") : stack1), depth0)) != null ? stack1 : "")
    + "\n		</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"header__content-container\">\n	<div class=\"header__logo-container\">\n		<img src=\""
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? lookupProperty(stack1,"logoUrl") : stack1), depth0))
    + "\" alt=\"Pinset\" class=\"header__icon\" />\n	</div>\n\n	<div class=\"header__search-input-content-container\">\n		"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? lookupProperty(stack1,"searchInput") : stack1), depth0)) != null ? stack1 : "")
    + "\n	</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? lookupProperty(stack1,"isAuthorized") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":21,"column":8}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['pin.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"pin__author-container-"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"PinID") : stack1), depth0))
    + "\">\n			<img class=\"pin__author-avatar\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"AuthorAvatar") : stack1), depth0))
    + "\">\n			<div class=\"pin__author-info\">\n				<p class=\"pin__author-name\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"AuthorName") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n				<p class=\"pin__author-followers-number\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"AuthorFollowersNumber") : stack1), depth0)) != null ? stack1 : "")
    + " Followers</p>\n			</div>\n		</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pin__content-container-"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"PinID") : stack1), depth0))
    + "\">\n	<div class=\"pin__image-container\">\n		<img class=\"pin__image-"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"PinID") : stack1), depth0))
    + "\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"MediaUrl") : stack1), depth0))
    + "\">\n		<div class=\"pin__image-preview-button-"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"PinID") : stack1), depth0))
    + "\">\n			<img src=\"./assets/icons/magnifier.svg\" alt=\"Preview\">\n		</div>\n	</div>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"imageOnly") : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":1},"end":{"line":16,"column":12}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['preview.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <img class=\"preview__side-menu-bookmark\" src=\"./assets/icons/bookmark-fill.svg\" alt=\"bookmark it\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <img class=\"preview__side-menu-bookmark\" src=\"./assets/icons/bookmark-empty.svg\" alt=\"bookmark it\">\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"preview__content-container preview__content-container-appearence\" tabindex=\"0\">\n    <div class=\"preview__upper-menu-container\">\n        <div class=\"preview__author-container\">\n            <img class=\"preview__author-avatar\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"AuthorAvatarUrl") : stack1), depth0))
    + "\">\n            <div class=\"preview__author-info\">\n                <p class=\"preview__author-name\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"AuthorName") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                <p class=\"preview__author-followers-number\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"AuthorFollowersNumber") : stack1), depth0)) != null ? stack1 : "")
    + " Followers</p>\n            </div>\n        </div>\n\n        <div class=\"preview__board-selector\">\n            <div class=\"preview__board-selector-container\">\n                <p class=\"preview__board-selector-container-text\">Сохранить</p>\n                <img class=\"preview__board-selector-container-icon\" src=\"./assets/icons/expand-list.svg\" alt=\"expand\">\n            </div>\n        </div>\n    </div>\n\n    <img id=\"preview__image\" class=\"preview__image-class\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"MediaUrl") : stack1), depth0))
    + "\" alt=\"Preview\">\n\n    <div class=\"preview__side-menu-container\">\n        <div class=\"preview__side-menu-more-container\">\n            <img class=\"preview__side-menu-more\" src=\"./assets/icons/more.svg\" alt=\"more\">\n        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"Bookmarked") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":25,"column":8},"end":{"line":29,"column":15}}})) != null ? stack1 : "")
    + "        <img class=\"preview__side-menu-comment\" src=\"./assets/icons/comment.svg\" alt=\"comment\">\n        <img class=\"preview__side-menu-share\" src=\"./assets/icons/share.svg\" alt=\"share\">\n    </div>\n\n    <div class=\"preview__stats-container\">\n        <div class=\"preview__stats-views-container\">\n            <p class=\"preview__stats-views-number\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"ViewsNumber") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n            <img src=\"./assets/icons/views.svg\" alt=\"bookmark\">\n        </div>\n        <div class=\"preview__stats-bookmarks-container\">\n            <p class=\"preview__stats-bookmarks-number\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"BookmarksNumber") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n            <img src=\"./assets/icons/bookmarked.svg\" alt=\"bookmark\">\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['savebox.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"savebox__content-container\">\n    <div class=\"savebox__content-main-box\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"searchInput") || (depth0 != null ? lookupProperty(depth0,"searchInput") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchInput","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n        <div class=\"savebox__boards-list-container\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"boardsList") || (depth0 != null ? lookupProperty(depth0,"boardsList") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"boardsList","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n        <button class=\"savebox__choose-board-button\" type=\"submit\">Выбрать</button>\n        <button class=\"savebox__create-board-button\" type=\"submit\">Создать доску</button>\n    </div>\n</div>\n";
},"useData":true});
templates['details-menu.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <a class=\"details-menu__option-"
    + container.escapeExpression(alias1((depth0 != null ? lookupProperty(depth0,"ID") : depth0), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"Download") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":56},"end":{"line":4,"column":135}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"Text") : depth0), depth0)) != null ? stack1 : "")
    + "</a>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " href=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"FilePath") : depth0), depth0))
    + "\" download=\"pinset-media\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"details-menu__content-container\">\n    <div class=\"details-menu__options-list-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"options") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":5,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"useData":true});
templates['drop-down-menu.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"drop-down-menu__content-container\">\n    <div class=\"drop-down-menu__options-list-container\">\n        <a class=\"drop-down-menu__user-option\" >\n            <img class=\"drop-down-menu__user-option-icon\" src=\"./assets/icons/user.svg\" alt=\"Profile\">\n            <p class=\"drop-down-menu__user-option-text\">Профиль</p>\n        </a>\n        <a class=\"drop-down-menu__settings-option\" >\n            <img class=\"drop-down-menu__settings-option-icon\" src=\"./assets/icons/settings.svg\" alt=\"Settings\">\n            <p class=\"drop-down-menu__settings-option-text\">Настройки</p>\n        </a>\n        <a class=\"drop-down-menu__logout-option\" >\n            <img class=\"drop-down-menu__logout-option-icon\" src=\"./assets/icons/logout.svg\" alt=\"Logout\">\n            <p class=\"drop-down-menu__logout-option-text\">Выйти</p>\n        </a>\n    </div>\n</div>\n";
},"useData":true});
templates['input-text-area.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <span class=\"icon\" style=\"margin-right: "
    + alias4(((helper = (helper = lookupProperty(helpers,"iconMargin") || (depth0 != null ? lookupProperty(depth0,"iconMargin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconMargin","hash":{},"data":data,"loc":{"start":{"line":5,"column":52},"end":{"line":5,"column":66}}}) : helper)))
    + ";\">\n                <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":6,"column":26},"end":{"line":6,"column":34}}}) : helper)))
    + "\" alt=\"icon\" />\n            </span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeHolder") || (depth0 != null ? lookupProperty(depth0,"placeHolder") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeHolder","hash":{},"data":data,"loc":{"start":{"line":11,"column":45},"end":{"line":11,"column":60}}}) : helper)))
    + "\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " maxlength=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"maxLength") || (depth0 != null ? lookupProperty(depth0,"maxLength") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"maxLength","hash":{},"data":data,"loc":{"start":{"line":12,"column":41},"end":{"line":12,"column":54}}}) : helper)))
    + "\" ";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " style=\"font-size: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"fontSize") || (depth0 != null ? lookupProperty(depth0,"fontSize") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"fontSize","hash":{},"data":data,"loc":{"start":{"line":13,"column":47},"end":{"line":13,"column":59}}}) : helper)))
    + ";\" ";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " style=\"min-height: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"minHeight") || (depth0 != null ? lookupProperty(depth0,"minHeight") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"minHeight","hash":{},"data":data,"loc":{"start":{"line":14,"column":49},"end":{"line":14,"column":62}}}) : helper)))
    + ";\" ";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " style=\"max-height: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"maxHeight") || (depth0 != null ? lookupProperty(depth0,"maxHeight") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"maxHeight","hash":{},"data":data,"loc":{"start":{"line":15,"column":49},"end":{"line":15,"column":62}}}) : helper)))
    + ";\" ";
},"13":function(container,depth0,helpers,partials,data) {
    return " oninput=\"this.style.height = 'auto'; this.style.height = this.scrollHeight + 'px'\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"input-text-area\">\n    <label class=\"input-text-area-title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":41},"end":{"line":2,"column":50}}}) : helper)))
    + "</label>\n    <div class=\"textarea-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":8,"column":15}}})) != null ? stack1 : "")
    + "        <textarea\n            class=\"input-area\"\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"placeHolder") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":69}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"maxLength") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":63}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"fontSize") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":69}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"minHeight") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":14,"column":72}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"maxHeight") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":15,"column":72}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"autoExpand") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":121}}})) != null ? stack1 : "")
    + "\n        ></textarea>\n    </div>\n</div>\n";
},"useData":true});
templates['input.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "input-error";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<label class=\"input__label\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"inputLabelText") || (depth0 != null ? lookupProperty(depth0,"inputLabelText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputLabelText","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":47}}}) : helper)))
    + "</label>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<span class=\"input__icon input__icon-left\">\n			"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"inputImageLeft") || (depth0 != null ? lookupProperty(depth0,"inputImageLeft") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputImageLeft","hash":{},"data":data,"loc":{"start":{"line":10,"column":3},"end":{"line":10,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n			<!-- Вставка SVG-кода для левой иконки -->\n		</span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " input__text-padding-left ";
},"9":function(container,depth0,helpers,partials,data) {
    return " input__text-padding-right";
},"11":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<span class=\"input__icon input__icon-right\">\n			"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"inputImageRight") || (depth0 != null ? lookupProperty(depth0,"inputImageRight") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputImageRight","hash":{},"data":data,"loc":{"start":{"line":21,"column":3},"end":{"line":21,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n			<!-- Вставка SVG-кода для правой иконки -->\n		</span>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"input__error-text-list\" style=\"display: none\"></div>\n	<div class=\"input__helper-text-list\" style=\"display: none\"></div>\n";
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
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputLabelText") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":5,"column":8}}})) != null ? stack1 : "")
    + "\n	<div class=\"input-icons-wrapper\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputImageLeft") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":13,"column":9}}})) != null ? stack1 : "")
    + "\n		<input type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"typeOfInput") || (depth0 != null ? lookupProperty(depth0,"typeOfInput") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeOfInput","hash":{},"data":data,"loc":{"start":{"line":15,"column":15},"end":{"line":15,"column":30}}}) : helper)))
    + "\"\n			class=\"input "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputImageLeft") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":71}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputImageRight") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":72},"end":{"line":16,"column":128}}})) != null ? stack1 : "")
    + "\"\n			placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputPlaceholder") || (depth0 != null ? lookupProperty(depth0,"inputPlaceholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputPlaceholder","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":36}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputValue") || (depth0 != null ? lookupProperty(depth0,"inputValue") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputValue","hash":{},"data":data,"loc":{"start":{"line":17,"column":45},"end":{"line":17,"column":59}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":61},"end":{"line":17,"column":94}}})) != null ? stack1 : "")
    + " />\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputImageRight") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":24,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputHelperText") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":1},"end":{"line":30,"column":8}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});
templates['search-input.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"searchinput__content-container\">\n    <img class=\"searchinput__finder-icon\" src=\"./assets/icons/finder.svg\" alt=\"search\">\n    <input class=\"searchinput__search-field\" type=\"text\" placeholder=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? lookupProperty(stack1,"Placeholder") : stack1), depth0))
    + "\" name=\"search-input\">\n    <img class=\"searchinput__clear-icon\" src=\"./assets/icons/clear-search.svg\" alt=\"clear\">\n</div>\n";
},"useData":true});
templates['lookPin.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"lookpin-container\">\n    <div class=\"lookpin__image\">\n        <img src=\"./assets/imgs/art.jpg\">\n    </div>\n    <div class=\"lookpin__data\">\n        <div class=\"lookpin__actions\">\n            <div class=\"lookpin__actions-account\">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"saveButton") || (depth0 != null ? lookupProperty(depth0,"saveButton") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"saveButton","hash":{},"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":32}}}) : helper))) != null ? stack1 : "")
    + "\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"rewardButton") || (depth0 != null ? lookupProperty(depth0,"rewardButton") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rewardButton","hash":{},"data":data,"loc":{"start":{"line":9,"column":16},"end":{"line":9,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n            <div class=\"lookpin__actions-extra\">\n                <img class=\"lookpin__side-menu-bookmark\" src=\"./assets/icons/bookmark-empty.svg\" alt=\"bookmark it\">\n                <img class=\"lookpin__side-menu-comment\" src=\"./assets/icons/comment.svg\" alt=\"comment\">\n                <img class=\"lookpin__side-menu-share\" src=\"./assets/icons/share.svg\" alt=\"share\">\n            </div>\n        </div>\n        <div class=\"lookpin__info\">\n            <div class=\"preview__author-container\">\n                <img class=\"preview__author-avatar\" src=\"./assets/imgs/avatar.jpg\">\n                <div class=\"preview__author-info\">\n                    <p class=\"preview__author-name\">"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"AuthorName") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                    <p class=\"preview__author-followers-number\">"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"AuthorFollowersNumber") : stack1), depth0)) != null ? stack1 : "")
    + " Followers</p>\n                </div>\n            </div>\n            <div class=\"pin__creature-time\">\n                1 месяц назад\n            </div>\n            <div class=\"pin__creature-place\">\n                Россия, Москва\n            </div>\n        </div>\n        <div class=\"lookpin__header\">\n            Готовы к будущему ? Красочный киберпанковский головной убор\n        </div>\n        <div class=\"lookpin__description\">\n            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\n            sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia\n            consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, \n            quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam\n        </div>\n        <div clas=\"lookpin__href\">\n            <a href=\"https://www.insertcoinclothing.com/cyberpunk-2077\">Ссылка на пин</a>\n        </div>\n        <div class=\"lookpin__comments-num\">\n            11 комментариев\n        </div>\n        <div class=\"lookpin__comments\">\n            <div class=\"comment\">\n                <img class=\"comment__author-avatar\" src=\"./assets/imgs/avatar.jpg\">\n                <div class=\"comment__data\">\n                    <div class=\"comment__author-name\">\n                        Chris Isaak\n                    </div>\n                    <div class=\"comment__text\">\n                        Поздравляем с выдающимися решениями в области ИИ. В корпоративном секторе они создают волны.\n                    </div>\n                </div>\n            </div>\n            <div class=\"comment\">\n                <img class=\"comment__author-avatar\" src=\"./assets/imgs/avatar.jpg\">\n                <div class=\"comment__data\">\n                    <div class=\"comment__author-name\">\n                        Chris Isaak\n                    </div>\n                    <div class=\"comment__text\">\n                        Поздравляем с выдающимися решениями в области ИИ. В корпоративном секторе они создают волны.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['editPin.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"MediaUrl") || (depth0 != null ? lookupProperty(depth0,"MediaUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"MediaUrl","hash":{},"data":data,"loc":{"start":{"line":6,"column":26},"end":{"line":6,"column":38}}}) : helper)))
    + "\" alt=\"Image\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"noimage__icon\">\n                    <img src=\"./assets/icons/check-photo.svg\" alt=\"checkphoto\">\n                </div>\n                <div class=\"noimage__text\">\n                    выберите файл или перетащите его сюда\n                </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"editpin-container\">\n    <div class=\"editpin__image\">\n        <div class=\"editpin__image-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"Image") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n        <input id=\"editpin__image-input\" type=\"file\" name=\"image\" accept=\"image/*\">\n    </div>\n    <div class=\"editpin__data\">\n        <div class=\"editpin__title\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"TitleInput") || (depth0 != null ? lookupProperty(depth0,"TitleInput") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TitleInput","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n        <div class=\"editpin__description\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"DescriptionInput") || (depth0 != null ? lookupProperty(depth0,"DescriptionInput") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DescriptionInput","hash":{},"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":23,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n        <div class=\"editpin__pinboard\">\n            <div class=\"editpin__pinboard-text\">Выберите доску</div>\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"BoardsList") || (depth0 != null ? lookupProperty(depth0,"BoardsList") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"BoardsList","hash":{},"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n        <div class=\"editpin__submit\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"PublishButton") || (depth0 != null ? lookupProperty(depth0,"PublishButton") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PublishButton","hash":{},"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n";
},"useData":true});
templates['login.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"cover\">\n    <span class=\"tomain__tap-button\">Главная</span>\n    <div class=\"auth\">\n        <div class=\"logo-auth\" style=\"padding: 20px\">\n            <a class\"a__form-logo\" style=\"text-decoration: none\" href=\"\">\n                <span style=\"color: black; font-size: 5rem\">Pin</span>\n                <span style=\"color: #e60023; font-size: 5rem\">Set</span>\n            </a>\n        </div>\n        <div class=\"form-auth\">\n            <form action=\"post\" class=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputs") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":14,"column":25}}})) != null ? stack1 : "")
    + "                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":15,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n            </form>\n            <div class=\"form-footer\">\n                <span>Нет аккаунта? "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"button_form_footer") || (depth0 != null ? lookupProperty(depth0,"button_form_footer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button_form_footer","hash":{},"data":data,"loc":{"start":{"line":18,"column":36},"end":{"line":18,"column":60}}}) : helper))) != null ? stack1 : "")
    + "</span>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['main.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"main__page-container\">\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"header") || (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":16}}}) : helper))) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"grid") || (depth0 != null ? lookupProperty(depth0,"grid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"grid","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});
templates['board-grid.hbs'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"boards") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":33,"column":17}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"profile__board\">\n                <img class=\"profile__board-cover\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"coverUrl") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "\">\n                <img class=\"profile__board-cover-more-icon\" src=\"./assets/icons/more.svg\" alt=\"Details\">\n                <div class=\"profile__board-info-container-"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"boardID") : depth0), depth0))
    + "\">\n                    <div class=\"profile__board-title-container\">\n                        <p class=\"profile__board-title\">"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0)) != null ? stack1 : "")
    + "</p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? lookupProperty(depths[1],"profile") : depths[1])) != null ? lookupProperty(stack1,"currentUser") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":24},"end":{"line":14,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                    <div class=\"profile__board-info\">\n                        <div class=\"profile__board-stats\">\n                            <div class=\"profile__board-stats-bookmarked\">\n                                <p>"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"bookmarkedNumber") : depth0), depth0)) != null ? stack1 : "")
    + "</p>\n                                <img src=\"./assets/icons/bookmarked-board.svg\" alt=\"Bookmark\">\n                            </div>\n                            <div class=\"profile__board-stats-rewarded\">\n                                <p>"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"rewardedNumber") : depth0), depth0)) != null ? stack1 : "")
    + "</p>\n                                <img src=\"./assets/icons/real-pinset-icon.svg\" alt=\"Pinset\">\n                            </div>\n                        </div>\n                        <div class=\"profile__board-modified-time\">\n                            <p>"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"lastModifyTime") : depth0), depth0)) != null ? stack1 : "")
    + "</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"private") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":28},"end":{"line":13,"column":35}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "                                <img src=\"./assets/icons/private.svg\" alt=\"Private\">\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <p class=\"profile__boards-list-not-found-text\">По вашему запросу ничего не найдено</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"profile__boards-list-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"boards") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":36,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true,"useDepths":true});
templates['profile.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"profile__user-edit-block-container\">\n                            <img class=\"profile__user-edit-icon\" src=\"./assets/icons/edit.svg\" alt=\"Settings\">\n                        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"profile__user-buttons-container\">\n                    "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"chatButton") : stack1), depth0)) != null ? stack1 : "")
    + "\n                    "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"subscribeButton") : stack1), depth0)) != null ? stack1 : "")
    + "\n                </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                    <img class=\"profile__user-vk-icon\" src=\"./assets/icons/social/vk.svg\" alt=\"VK\">\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                    <img class=\"profile__user-telegram-icon\" src=\"./assets/icons/social/telegram.svg\" alt=\"Telegram\">\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                    <img class=\"profile__user-github-icon\" src=\"./assets/icons/social/github.svg\" alt=\"Github\">\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "                    <img class=\"profile__user-pinterest-icon\" src=\"./assets/icons/social/pinterest.svg\" alt=\"Pinterest\">\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"profile__boards-header-navigation\">\n                            <a class=\"profile__boards-header-nav-to-pinset-link\" href=\"/feed\">\n                                Pinset\n                            </a>\n                            <img class=\"profile__boards-header-navigation-arrow\" src=\"./assets/icons/navigation-arrow.svg\" alt=\"Navigate\">\n                            <a class=\"profile__boards-header-nav-to-profile-link\" href=\"/profile\">\n                                Мой профиль\n                            </a>\n                        </div>\n                        <div class=\"profile__boards-header-title\">\n                            <p>Мои доски</p>\n                            <img class=\"profile__boards-header-create-board-btn\" src=\"./assets/icons/add-button.svg\" alt=\"Create\">\n                        </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"profile__boards-header-navigation\">\n                            <a class=\"profile__boards-header-nav-to-pinset-link\" href=\"/feed\">\n                                Pinset\n                            </a>\n                            <img class=\"profile__boards-header-navigation-arrow\" src=\"./assets/icons/navigation-arrow.svg\" alt=\"Navigate\">\n                            <a class=\"profile__boards-header-nav-to-profile\" href=\"/profile\">\n                                @"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"userNickname") : stack1), depth0)) != null ? stack1 : "")
    + "\n                            </a>\n                        </div>\n                        <div class=\"profile__boards-header-title\">\n                            <p>Доски пользователя</p>\n                        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.lambda, alias5=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"profile__page-container\">\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"header") || (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":16}}}) : helper))) != null ? stack1 : "")
    + "\n\n    <div class=\"profile__content-container\">\n        <div class=\"profile__user-info-container\">\n            <div class=\"profile__user-avatar-container\">\n                <div class=\"profile__user-avatar-block\">\n                    <img class=\"profile__user-avatar\" src=\""
    + alias5(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"avatarUrl") : stack1), depth0))
    + "\" alt=\"Avatar\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"currentUser") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":14,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n\n            <div class=\"profile__user-name-content-container\">\n                <p class=\"profile__user-name-text\">"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"userName") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                <div class=\"profile__user-nickname-container\">\n                    <img class=\"profile__user-nickname-copy\" src=\"./assets/icons/copy.svg\" alt=\"Copy\">\n                    <p class=\"profile__user-nickname-text\">@"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"userNickname") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                    <img class=\"profile__user-nickname-share-profile\" src=\"./assets/icons/share-profile.svg\" alt=\"Copy\">\n                </div>\n            </div>\n\n            <div class=\"profile__user-people-container\">\n                <img src=\"./assets/icons/people.svg\" alt=\"People\">\n                <p class=\"profile__user-followings-number\">"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"followingsNumber") : stack1), depth0)) != null ? stack1 : "")
    + " подписок</p>\n                <p class=\"profile__user-followers-number\">"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"followersNumber") : stack1), depth0)) != null ? stack1 : "")
    + " подписчиков</p>\n            </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"currentUser") : stack1),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":38,"column":23}}})) != null ? stack1 : "")
    + "\n            <div class=\"profile__user-social-networks-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"socialNetworks") : stack1)) != null ? lookupProperty(stack1,"vk") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":16},"end":{"line":43,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"socialNetworks") : stack1)) != null ? lookupProperty(stack1,"telegram") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":16},"end":{"line":46,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"socialNetworks") : stack1)) != null ? lookupProperty(stack1,"github") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":16},"end":{"line":49,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"socialNetworks") : stack1)) != null ? lookupProperty(stack1,"pinterest") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":16},"end":{"line":52,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n\n            <div class=\"profile__user-personal-website-container\">\n                <img src=\"./assets/icons/link.svg\" alt=\"Link\">\n                <a href=\""
    + alias5(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"personalWebsiteLink") : stack1), depth0))
    + "\">"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"personalWebsiteLink") : stack1), depth0)) != null ? stack1 : "")
    + "</a>\n            </div>\n\n            <div class=\"profile__user-geolocation-container\">\n                <img src=\"./assets/icons/location.svg\" alt=\"Location\">\n                <p>"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"geolocation") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n            </div>\n\n            <hr/>\n            \n            <div class=\"profile__user-bio-container\">\n                <p>"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"bio") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n            </div>\n        </div>\n\n        <div class=\"profile__boards-container\">\n            <div class=\"profile__boards-header-container\">\n                <div class=\"profile__boards-header-upper-menu-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"currentUser") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":75,"column":20},"end":{"line":102,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n\n                <div class=\"profile__boards-header-search-block\">\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"searchInputBar") || (depth0 != null ? lookupProperty(depth0,"searchInputBar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchInputBar","hash":{},"data":data,"loc":{"start":{"line":106,"column":20},"end":{"line":106,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\n                    <img class=\"profile__boards-header-searh-filter-icon\" src=\"./assets/icons/filter.svg\" alt=\"Filters\">\n                    <img src=\"./assets/icons/sort.svg\" alt=\"Sort\">\n                </div>\n            </div>\n\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"boardGrid") || (depth0 != null ? lookupProperty(depth0,"boardGrid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"boardGrid","hash":{},"data":data,"loc":{"start":{"line":112,"column":12},"end":{"line":112,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n\n</div>\n";
},"useData":true});
templates['signup.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"cover\">\n    <span class=\"tomain__tap-button\">Главная</span>\n    <div class=\"auth\">\n        <div class=\"logo-auth\" style=\"padding: 20px\">\n            <a class\"a_form-logo\" style=\"text-decoration: none\" href=\"\">\n                <span style=\"color: black; font-size: 5rem\">Pin</span>\n                <span style=\"color: #e60023; font-size: 5rem\">Set</span>\n            </a>\n        </div>\n        <div class=\"form-auth\">\n            <form action=\"post\" class=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputs") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":14,"column":25}}})) != null ? stack1 : "")
    + "                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":15,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n            </form>\n            <div class=\"form-footer\">\n                <span>Уже зарегистрированы? "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"button_form_footer") || (depth0 != null ? lookupProperty(depth0,"button_form_footer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button_form_footer","hash":{},"data":data,"loc":{"start":{"line":18,"column":44},"end":{"line":18,"column":68}}}) : helper))) != null ? stack1 : "")
    + "</span>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['unknown.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"unknown__page-container\">\n    <span class=\"tomain__tap-button\">Главная</span>\n    <h1>404 страница не найдена</h1>\n</div>\n";
},"useData":true});
})();