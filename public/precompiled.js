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

  return "            <div class='savebox__board-selection savebox__board-selection-"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"BoardName") : depth0), depth0))
    + "'>\n                <input class='savebox__board-checkbox' type='checkbox' id='checkbox-"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"BoardName") : depth0), depth0))
    + "' value='"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"BoardName") : depth0), depth0))
    + "' />\n                <div class='savebox__board-cover-container'>\n                    <img class='savebox__board-cover' src='"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"BoardCoverUrl") : depth0), depth0))
    + "' alt='cover' />\n                </div>\n                <label class='savebox__board-label' for='checkbox-"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"BoardName") : depth0), depth0))
    + "'>"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"BoardName") : depth0), depth0)) != null ? stack1 : "")
    + "</label>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"Private") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":12,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                    <img class='savebox__board-private-icon' src='./assets/icons/private.svg' alt='private' />\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <p>Здесь будут отображены доски</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='savebox__boards-list'>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"boards") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "")
    + "</div>";
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
    + ">\r\n	"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"iconLeft") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":3,"column":65}}})) != null ? stack1 : "")
    + "\r\n	"
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":4,"column":10}}}) : helper)))
    + "\r\n	"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"iconRight") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":5,"column":68}}})) != null ? stack1 : "")
    + "\r\n</button>\r\n";
},"useData":true});
templates['icon-button.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='icon-button__content-container "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? lookupProperty(stack1,"className") : stack1), depth0))
    + "'>\n    <img class='"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? lookupProperty(stack1,"className") : stack1), depth0))
    + "' src='"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? lookupProperty(stack1,"iconPath") : stack1), depth0))
    + "' />\n</div>";
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

  return "<div class='feed__layout-container'>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pins") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":4,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['header.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class='header__create-btn-container'>\n            "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? lookupProperty(stack1,"createButton") : stack1), depth0)) != null ? stack1 : "")
    + "\n        </div>\n        <div class='header__profile-container'>\n            <img class='header__profile-avatar' src='"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? lookupProperty(stack1,"profileUrl") : stack1), depth0))
    + "' />\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class='header__login-btn-container'>\n            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? lookupProperty(stack1,"loginButton") : stack1), depth0)) != null ? stack1 : "")
    + "\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='header__content-container'>\n    <div class='header__logo-container'>\n        <img src='"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? lookupProperty(stack1,"logoUrl") : stack1), depth0))
    + "' alt='Pinset' class='header__icon' />\n    </div>\n\n    <div class='header__search-input-content-container'>\n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? lookupProperty(stack1,"searchInput") : stack1), depth0)) != null ? stack1 : "")
    + "\n    </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? lookupProperty(stack1,"isAuthorized") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":21,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['pin.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class='pin__author-container-"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"pin_id") : stack1), depth0))
    + "'>\n            <img class='pin__author-avatar' src='"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"author_info") : stack1)) != null ? lookupProperty(stack1,"avatar_url") : stack1), depth0))
    + "' />\n            <div class='pin__author-info'>\n                <p class='pin__author-name'>"
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"author_info") : stack1)) != null ? lookupProperty(stack1,"nick_name") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                <p class='pin__author-followers-number'>"
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"author_info") : stack1)) != null ? lookupProperty(stack1,"followings_count") : stack1), depth0)) != null ? stack1 : "")
    + " Followers</p>\n            </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='pin__content-container-"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"pin_id") : stack1), depth0))
    + "'>\n    <div class='pin__image-container'>\n        <img class='pin__image-"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"pin_id") : stack1), depth0))
    + "' src='"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"media_url") : stack1), depth0))
    + "' />\n        <div class='pin__image-preview-button-"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"pin_id") : stack1), depth0))
    + "'>\n            <img src='./assets/icons/magnifier.svg' alt='Preview' />\n        </div>\n    </div>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"pin") : depth0)) != null ? lookupProperty(stack1,"imageOnly") : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":16,"column":15}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['preview.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <img class='preview__side-menu-bookmark' src='./assets/icons/bookmark-fill.svg' alt='bookmark it' />\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <img class='preview__side-menu-bookmark' src='./assets/icons/bookmark-empty.svg' alt='bookmark it' />\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='preview__content-container preview__content-container-appearence' tabindex='0'>\n    <div class='preview__upper-menu-container'>\n        <div class='preview__author-container'>\n            <img class='preview__author-avatar' src='"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"author") : stack1), depth0))
    + "' />\n            <div class='preview__author-info'>\n                <p class='preview__author-name'>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"AuthorName") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                <p class='preview__author-followers-number'>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"AuthorFollowersNumber") : stack1), depth0)) != null ? stack1 : "")
    + " Followers</p>\n            </div>\n        </div>\n\n        <div class='preview__board-selector'>\n            <div class='preview__board-selector-container'>\n                <p class='preview__board-selector-container-text'>Сохранить</p>\n                <img class='preview__board-selector-container-icon' src='./assets/icons/expand-list.svg' alt='expand' />\n            </div>\n        </div>\n    </div>\n\n    <img id='preview__image' class='preview__image-class' src='"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"MediaUrl") : stack1), depth0))
    + "' alt='Preview' />\n\n    <div class='preview__side-menu-container'>\n        <div class='preview__side-menu-more-container'>\n            <img class='preview__side-menu-more' src='./assets/icons/more.svg' alt='more' />\n        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"Bookmarked") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":25,"column":8},"end":{"line":29,"column":15}}})) != null ? stack1 : "")
    + "        <img class='preview__side-menu-comment' src='./assets/icons/comment.svg' alt='comment' />\n        <img class='preview__side-menu-share' src='./assets/icons/share.svg' alt='share' />\n    </div>\n\n    <div class='preview__stats-container'>\n        <div class='preview__stats-views-container'>\n            <p class='preview__stats-views-number'>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"ViewsNumber") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n            <img src='./assets/icons/views.svg' alt='bookmark' />\n        </div>\n        <div class='preview__stats-bookmarks-container'>\n            <p class='preview__stats-bookmarks-number'>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? lookupProperty(stack1,"BookmarksNumber") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n            <img src='./assets/icons/bookmarked.svg' alt='bookmark' />\n        </div>\n    </div>\n</div>";
},"useData":true});
templates['savebox.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='savebox__content-container'>\n    <div class='savebox__content-main-box'>\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"searchInput") || (depth0 != null ? lookupProperty(depth0,"searchInput") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchInput","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n        <div class='savebox__boards-list-container'>\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"boardsList") || (depth0 != null ? lookupProperty(depth0,"boardsList") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"boardsList","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n        <button class='savebox__create-board-button' type='submit'>Создать доску</button>\n    </div>\n</div>";
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
    + "</a>\r\n";
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

  return "<div class=\"details-menu__content-container\">\r\n    <div class=\"details-menu__options-list-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"options") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":5,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"useData":true});
templates['drop-down-menu.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class='drop-down-menu__content-container'>\n    <div class='drop-down-menu__options-list-container'>\n        <a class='drop-down-menu__user-option'>\n            <img class='drop-down-menu__user-option-icon' src='./assets/icons/user.svg' alt='Profile' />\n            <p class='drop-down-menu__user-option-text'>Профиль</p>\n        </a>\n        <a class='drop-down-menu__settings-option'>\n            <img class='drop-down-menu__settings-option-icon' src='./assets/icons/settings.svg' alt='Settings' />\n            <p class='drop-down-menu__settings-option-text'>Настройки</p>\n        </a>\n        <a class='drop-down-menu__logout-option'>\n            <img class='drop-down-menu__logout-option-icon' src='./assets/icons/logout.svg' alt='Logout' />\n            <p class='drop-down-menu__logout-option-text'>Выйти</p>\n        </a>\n    </div>\n</div>";
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

  return "  <label class=\"input__label\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"inputLabelText") || (depth0 != null ? lookupProperty(depth0,"inputLabelText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputLabelText","hash":{},"data":data,"loc":{"start":{"line":4,"column":30},"end":{"line":4,"column":48}}}) : helper)))
    + "</label>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"input__icon input__icon-left\">\r\n      "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"inputImageLeft") || (depth0 != null ? lookupProperty(depth0,"inputImageLeft") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputImageLeft","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\r\n      <!-- Вставка SVG-кода для левой иконки -->\r\n    </span>\r\n";
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

  return "    <span class=\"input__icon input__icon-right\">\r\n      "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"inputImageRight") || (depth0 != null ? lookupProperty(depth0,"inputImageRight") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inputImageRight","hash":{},"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":22,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\r\n      <!-- Вставка SVG-кода для правой иконки -->\r\n    </span>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"input__error-text-list\" style=\"display: none\"></div>\r\n  <div class=\"input__helper-text-list\" style=\"display: none\"></div>\r\n";
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
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputLabelText") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"input-icons-wrapper\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputImageLeft") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":13,"column":11}}})) != null ? stack1 : "")
    + "\r\n    <input type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"typeOfInput") || (depth0 != null ? lookupProperty(depth0,"typeOfInput") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeOfInput","hash":{},"data":data,"loc":{"start":{"line":15,"column":17},"end":{"line":15,"column":32}}}) : helper)))
    + "\"\r\n      class=\"input "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputImageLeft") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":19},"end":{"line":16,"column":74}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputImageRight") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":75},"end":{"line":16,"column":131}}})) != null ? stack1 : "")
    + "\"\r\n      placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputPlaceholder") || (depth0 != null ? lookupProperty(depth0,"inputPlaceholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputPlaceholder","hash":{},"data":data,"loc":{"start":{"line":17,"column":19},"end":{"line":17,"column":39}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputValue") || (depth0 != null ? lookupProperty(depth0,"inputValue") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputValue","hash":{},"data":data,"loc":{"start":{"line":17,"column":48},"end":{"line":17,"column":62}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":64},"end":{"line":17,"column":97}}})) != null ? stack1 : "")
    + "\r\n      oninput=\"this.dispatchEvent(new CustomEvent('input-change', { detail: this.value }))\" />\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputImageRight") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":25,"column":11}}})) != null ? stack1 : "")
    + "  </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputHelperText") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":2},"end":{"line":31,"column":9}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n";
},"useData":true});
templates['search-input.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='searchinput__content-container'>\n    <img class='searchinput__finder-icon' src='./assets/icons/finder.svg' alt='search' />\n    <input class='searchinput__search-field' type='text' placeholder='"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? lookupProperty(stack1,"Placeholder") : stack1), depth0))
    + "' name='search-input' />\n    <img class='searchinput__clear-icon' src='./assets/icons/clear-search.svg' alt='clear' />\n</div>";
},"useData":true});
templates['login.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"cover\">\r\n    <span class=\"tomain__tap-button\">Главная</span>\r\n    <div class=\"auth\">\r\n        <div class=\"logo-auth\" style=\"padding: 20px\">\r\n            <a class\"a__form-logo\" style=\"text-decoration: none\" href=\"\">\r\n                <span style=\"color: black; font-size: 5rem\">Pin</span>\r\n                <span style=\"color: #e60023; font-size: 5rem\">Set</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"form-auth\">\r\n            <form action=\"post\" class=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputs") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":14,"column":25}}})) != null ? stack1 : "")
    + "                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":15,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </form>\r\n            <div class=\"form-footer\">\r\n                <span>Нет аккаунта? "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"button_form_footer") || (depth0 != null ? lookupProperty(depth0,"button_form_footer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button_form_footer","hash":{},"data":data,"loc":{"start":{"line":18,"column":36},"end":{"line":18,"column":60}}}) : helper))) != null ? stack1 : "")
    + "</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['main.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='main__page-container'>\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"header") || (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":16}}}) : helper))) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"grid") || (depth0 != null ? lookupProperty(depth0,"grid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"grid","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\n</div>";
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

  return "            <div class=\"profile__board\">\r\n                <img class=\"profile__board-cover\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"coverUrl") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "\">\r\n                <img class=\"profile__board-cover-more-icon\" src=\"./assets/icons/more.svg\" alt=\"Details\">\r\n                <div class=\"profile__board-info-container-"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"boardID") : depth0), depth0))
    + "\">\r\n                    <div class=\"profile__board-title-container\">\r\n                        <p class=\"profile__board-title\">"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0)) != null ? stack1 : "")
    + "</p>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? lookupProperty(depths[1],"profile") : depths[1])) != null ? lookupProperty(stack1,"currentUser") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":24},"end":{"line":14,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\r\n                    <div class=\"profile__board-info\">\r\n                        <div class=\"profile__board-stats\">\r\n                            <div class=\"profile__board-stats-bookmarked\">\r\n                                <p>"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"bookmarkedNumber") : depth0), depth0)) != null ? stack1 : "")
    + "</p>\r\n                                <img src=\"./assets/icons/bookmarked-board.svg\" alt=\"Bookmark\">\r\n                            </div>\r\n                            <div class=\"profile__board-stats-rewarded\">\r\n                                <p>"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"rewardedNumber") : depth0), depth0)) != null ? stack1 : "")
    + "</p>\r\n                                <img src=\"./assets/icons/real-pinset-icon.svg\" alt=\"Pinset\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"profile__board-modified-time\">\r\n                            <p>"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"lastModifyTime") : depth0), depth0)) != null ? stack1 : "")
    + "</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"private") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":28},"end":{"line":13,"column":35}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "                                <img src=\"./assets/icons/private.svg\" alt=\"Private\">\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <p class=\"profile__boards-list-not-found-text\">По вашему запросу ничего не найдено</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"profile__boards-list-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"boards") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":36,"column":11}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true,"useDepths":true});
templates['profile.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                        <div class='profile__user-edit-block-container'>\n                            <img class='profile__user-edit-icon' src='./assets/icons/edit.svg' alt='Settings' />\n                        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class='profile__user-buttons-container'>\n                    "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"chatButton") : stack1), depth0)) != null ? stack1 : "")
    + "\n                    "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"subscribeButton") : stack1), depth0)) != null ? stack1 : "")
    + "\n                </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                    <img class='profile__user-vk-icon' src='./assets/icons/social/vk.svg' alt='VK' />\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                    <img class='profile__user-telegram-icon' src='./assets/icons/social/telegram.svg' alt='Telegram' />\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                    <img class='profile__user-github-icon' src='./assets/icons/social/github.svg' alt='Github' />\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "                    <img class='profile__user-pinterest-icon' src='./assets/icons/social/pinterest.svg' alt='Pinterest' />\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "                        <div class='profile__boards-header-navigation'>\n                            <a class='profile__boards-header-nav-to-pinset-link' href='/feed'>\n                                Pinset\n                            </a>\n                            <img class='profile__boards-header-navigation-arrow' src='./assets/icons/navigation-arrow.svg' alt='Navigate' />\n                            <a class='profile__boards-header-nav-to-profile-link' href='/profile'>\n                                Мой профиль\n                            </a>\n                        </div>\n                        <div class='profile__boards-header-title'>\n                            <p>Мои доски</p>\n                            <img class='profile__boards-header-create-board-btn' src='./assets/icons/add-button.svg' alt='Create' />\n                        </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class='profile__boards-header-navigation'>\n                            <a class='profile__boards-header-nav-to-pinset-link' href='/feed'>\n                                Pinset\n                            </a>\n                            <img class='profile__boards-header-navigation-arrow' src='./assets/icons/navigation-arrow.svg' alt='Navigate' />\n                            <a class='profile__boards-header-nav-to-profile' href='/profile'>\n                                @"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"userNickname") : stack1), depth0)) != null ? stack1 : "")
    + "\n                            </a>\n                        </div>\n                        <div class='profile__boards-header-title'>\n                            <p>Доски пользователя</p>\n                        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.lambda, alias5=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='profile__page-container'>\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"header") || (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":16}}}) : helper))) != null ? stack1 : "")
    + "\n\n    <div class='profile__content-container'>\n        <div class='profile__user-info-container'>\n            <div class='profile__user-avatar-container'>\n                <div class='profile__user-avatar-block'>\n                    <img class='profile__user-avatar' src='"
    + alias5(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"avatarUrl") : stack1), depth0))
    + "' alt='Avatar' />\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"currentUser") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":14,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n\n            <div class='profile__user-name-content-container'>\n                <p class='profile__user-name-text'>"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"userName") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                <div class='profile__user-nickname-container'>\n                    <img class='profile__user-nickname-copy' src='./assets/icons/copy.svg' alt='Copy' />\n                    <p class='profile__user-nickname-text'>@"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"userNickname") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                    <img class='profile__user-nickname-share-profile' src='./assets/icons/share-profile.svg' alt='Copy' />\n                </div>\n            </div>\n\n            <div class='profile__user-people-container'>\n                <img src='./assets/icons/people.svg' alt='People' />\n                <p class='profile__user-followings-number'>"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"followingsNumber") : stack1), depth0)) != null ? stack1 : "")
    + " подписок</p>\n                <p class='profile__user-followers-number'>"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"followersNumber") : stack1), depth0)) != null ? stack1 : "")
    + "\n                    подписчиков</p>\n            </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"currentUser") : stack1),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":39,"column":23}}})) != null ? stack1 : "")
    + "\n            <div class='profile__user-social-networks-container'>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"socialNetworks") : stack1)) != null ? lookupProperty(stack1,"vk") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":16},"end":{"line":44,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"socialNetworks") : stack1)) != null ? lookupProperty(stack1,"telegram") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":16},"end":{"line":47,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"socialNetworks") : stack1)) != null ? lookupProperty(stack1,"github") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":16},"end":{"line":50,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"socialNetworks") : stack1)) != null ? lookupProperty(stack1,"pinterest") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":16},"end":{"line":53,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n\n            <div class='profile__user-personal-website-container'>\n                <img src='./assets/icons/link.svg' alt='Link' />\n                <a href='"
    + alias5(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"personalWebsiteLink") : stack1), depth0))
    + "'>"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"personalWebsiteLink") : stack1), depth0)) != null ? stack1 : "")
    + "</a>\n            </div>\n\n            <div class='profile__user-geolocation-container'>\n                <img src='./assets/icons/location.svg' alt='Location' />\n                <p>"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"geolocation") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n            </div>\n\n            <hr />\n\n            <div class='profile__user-bio-container'>\n                <p>"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"bio") : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n            </div>\n        </div>\n\n        <div class='profile__boards-container'>\n            <div class='profile__boards-header-container'>\n                <div class='profile__boards-header-upper-menu-container'>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"currentUser") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":76,"column":20},"end":{"line":103,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n\n                <div class='profile__boards-header-search-block'>\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"searchInputBar") || (depth0 != null ? lookupProperty(depth0,"searchInputBar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchInputBar","hash":{},"data":data,"loc":{"start":{"line":107,"column":20},"end":{"line":107,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\n                    <img class='profile__boards-header-searh-filter-icon' src='./assets/icons/filter.svg' alt='Filters' />\n                    <img src='./assets/icons/sort.svg' alt='Sort' />\n                </div>\n            </div>\n\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"boardGrid") || (depth0 != null ? lookupProperty(depth0,"boardGrid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"boardGrid","hash":{},"data":data,"loc":{"start":{"line":113,"column":12},"end":{"line":113,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n\n</div>";
},"useData":true});
templates['signup.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"cover\">\r\n    <span class=\"tomain__tap-button\">Главная</span>\r\n    <div class=\"auth\">\r\n        <div class=\"logo-auth\" style=\"padding: 20px\">\r\n            <a class\"a_form-logo\" style=\"text-decoration: none\" href=\"\">\r\n                <span style=\"color: black; font-size: 5rem\">Pin</span>\r\n                <span style=\"color: #e60023; font-size: 5rem\">Set</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"form-auth\">\r\n            <form action=\"post\" class=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"inputs") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":14,"column":25}}})) != null ? stack1 : "")
    + "                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":15,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </form>\r\n            <div class=\"form-footer\">\r\n                <span>Уже зарегистрированы? "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"button_form_footer") || (depth0 != null ? lookupProperty(depth0,"button_form_footer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button_form_footer","hash":{},"data":data,"loc":{"start":{"line":18,"column":44},"end":{"line":18,"column":68}}}) : helper))) != null ? stack1 : "")
    + "</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['unknown.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class='unknown__page-container'>\n    <span class='tomain__tap-button'>Главная</span>\n    <h1>404 страница не найдена</h1>\n</div>";
},"useData":true});
})();