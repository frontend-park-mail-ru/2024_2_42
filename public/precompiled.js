(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['button.hbs'] = template({'1':function(container,depth0,helpers,partials,data) {
    return 'disabled';
},'3':function(container,depth0,helpers,partials,data) {
    return 'active';
},'5':function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '<img src="'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,'iconLeft') || (depth0 != null ? lookupProperty(depth0,'iconLeft') : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === 'function' ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{'name':'iconLeft','hash':{},'data':data,'loc':{'start':{'line':3,'column':28},'end':{'line':3,'column':40}}}) : helper)))
    + '" alt="iconLeft" />';
},'7':function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '<img src="'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,'iconRight') || (depth0 != null ? lookupProperty(depth0,'iconRight') : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === 'function' ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{'name':'iconRight','hash':{},'data':data,'loc':{'start':{'line':5,'column':29},'end':{'line':5,'column':42}}}) : helper)))
    + '" alt="iconRight" />';
},'compiler':[8,'>= 4.3.0'],'main':function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3='function', alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '<button class="button '
    + alias4(((helper = (helper = lookupProperty(helpers,'type') || (depth0 != null ? lookupProperty(depth0,'type') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'type','hash':{},'data':data,'loc':{'start':{'line':1,'column':22},'end':{'line':1,'column':30}}}) : helper)))
    + ' '
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'disabled') : depth0),{'name':'if','hash':{},'fn':container.program(1, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':1,'column':31},'end':{'line':1,'column':62}}})) != null ? stack1 : '')
    + ' '
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'active') : depth0),{'name':'if','hash':{},'fn':container.program(3, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':1,'column':63},'end':{'line':1,'column':90}}})) != null ? stack1 : '')
    + '" '
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'disabled') : depth0),{'name':'if','hash':{},'fn':container.program(1, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':1,'column':92},'end':{'line':2,'column':27}}})) != null ? stack1 : '')
    + '>\r\n  '
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'iconLeft') : depth0),{'name':'if','hash':{},'fn':container.program(5, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':3,'column':2},'end':{'line':3,'column':66}}})) != null ? stack1 : '')
    + '\r\n  '
    + alias4(((helper = (helper = lookupProperty(helpers,'label') || (depth0 != null ? lookupProperty(depth0,'label') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'label','hash':{},'data':data,'loc':{'start':{'line':4,'column':2},'end':{'line':4,'column':11}}}) : helper)))
    + '\r\n  '
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'iconRight') : depth0),{'name':'if','hash':{},'fn':container.program(7, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':5,'column':2},'end':{'line':5,'column':69}}})) != null ? stack1 : '')
    + '\r\n</button>\r\n';
},'useData':true});
templates['header.hbs'] = template({'1':function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '  <div class="dropdown">\r\n    <button class="dropDownButton">Меню</button>\r\n    <div class="dropdown__content" id="dropdown__items" style="display: none;">\r\n'
    + ((stack1 = lookupProperty(helpers,'each').call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,'buttons') : depth0),{'name':'each','hash':{},'fn':container.program(2, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':12,'column':6},'end':{'line':21,'column':15}}})) != null ? stack1 : '')
    + '    </div>\r\n  </div>\r\n';
},'2':function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,'unless').call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,'disabled') : depth0),{'name':'unless','hash':{},'fn':container.program(3, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':13,'column':8},'end':{'line':20,'column':19}}})) != null ? stack1 : '');
},'3':function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '          <a \r\n            href="'
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,'href') : depth0), depth0))
    + '" \r\n            class="button" \r\n          >\r\n            '
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,'name') : depth0), depth0))
    + '\r\n          </a>\r\n';
},'5':function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3='function', lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '  <div class="header__profile">\r\n    '
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'notificationButton') || (depth0 != null ? lookupProperty(depth0,'notificationButton') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'notificationButton','hash':{},'data':data,'loc':{'start':{'line':34,'column':4},'end':{'line':34,'column':28}}}) : helper))) != null ? stack1 : '')
    + '\r\n    '
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'profileButton') || (depth0 != null ? lookupProperty(depth0,'profileButton') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'profileButton','hash':{},'data':data,'loc':{'start':{'line':35,'column':4},'end':{'line':35,'column':23}}}) : helper))) != null ? stack1 : '')
    + '\r\n  </div>\r\n';
},'7':function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3='function', lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '  <div class="header__auth">\r\n    <div class="header__login-btn">'
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'loginButton') || (depth0 != null ? lookupProperty(depth0,'loginButton') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'loginButton','hash':{},'data':data,'loc':{'start':{'line':42,'column':35},'end':{'line':42,'column':52}}}) : helper))) != null ? stack1 : '')
    + '</div>\r\n    <div class="header__signup-btn">'
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'registerButton') || (depth0 != null ? lookupProperty(depth0,'registerButton') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'registerButton','hash':{},'data':data,'loc':{'start':{'line':43,'column':36},'end':{'line':43,'column':56}}}) : helper))) != null ? stack1 : '')
    + '</div>\r\n  </div>\r\n';
},'compiler':[8,'>= 4.3.0'],'main':function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3='function', lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '<div class="header">\r\n  <!-- Icon on the left -->\r\n  <div class="header__icon">\r\n    <img src="'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,'iconUrl') || (depth0 != null ? lookupProperty(depth0,'iconUrl') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'iconUrl','hash':{},'data':data,'loc':{'start':{'line':4,'column':14},'end':{'line':4,'column':25}}}) : helper)))
    + '" alt="App Icon" class="header__icon" />\r\n  </div>\r\n\r\n  <!-- Section buttons -->\r\n'
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'isLoggedIn') : depth0),{'name':'if','hash':{},'fn':container.program(1, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':8,'column':2},'end':{'line':24,'column':9}}})) != null ? stack1 : '')
    + '\r\n  <!-- Search bar -->\r\n  <div class="header__search">\r\n    '
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'searchInput') || (depth0 != null ? lookupProperty(depth0,'searchInput') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'searchInput','hash':{},'data':data,'loc':{'start':{'line':28,'column':4},'end':{'line':28,'column':21}}}) : helper))) != null ? stack1 : '')
    + '\r\n  </div>\r\n\r\n  <!-- Notifications and Profile -->\r\n'
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'isLoggedIn') : depth0),{'name':'if','hash':{},'fn':container.program(5, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':32,'column':2},'end':{'line':37,'column':9}}})) != null ? stack1 : '')
    + '\r\n  <!-- Login and Registration buttons -->\r\n'
    + ((stack1 = lookupProperty(helpers,'unless').call(alias1,(depth0 != null ? lookupProperty(depth0,'isLoggedIn') : depth0),{'name':'unless','hash':{},'fn':container.program(7, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':40,'column':2},'end':{'line':45,'column':13}}})) != null ? stack1 : '')
    + '</div>\r\n';
},'useData':true});
templates['net.hbs'] = template({'1':function(container,depth0,helpers,partials,data) {
    var stack1;

  return '        '
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : '')
    + '\r\n';
},'compiler':[8,'>= 4.3.0'],'main':function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '<section class="net">\r\n'
    + ((stack1 = lookupProperty(helpers,'each').call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,'pins') : depth0),{'name':'each','hash':{},'fn':container.program(1, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':2,'column':4},'end':{'line':4,'column':13}}})) != null ? stack1 : '')
    + '</section>\r\n';
},'useData':true});
templates['pin.hbs'] = template({'1':function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return '        <option value="'
    + alias2(alias1(depth0, depth0))
    + '">'
    + alias2(alias1(depth0, depth0))
    + '</option>\r\n';
},'compiler':[8,'>= 4.3.0'],'main':function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '<div class="pin">\r\n  <div class="pin__upper-buttons-container">\r\n    <select class="pin__board-selector">\r\n'
    + ((stack1 = lookupProperty(helpers,'each').call(alias1,(depth0 != null ? lookupProperty(depth0,'boards') : depth0),{'name':'each','hash':{},'fn':container.program(1, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':4,'column':6},'end':{'line':6,'column':15}}})) != null ? stack1 : '')
    + '    </select>\r\n\r\n    <div class="pin__save-button">'
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,'buttons') : depth0)) != null ? lookupProperty(stack1,'saveButton') : stack1), depth0)) != null ? stack1 : '')
    + '</div>\r\n  </div>\r\n    <div class="pin__image-container">\r\n      <img src="'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,'pinUrl') || (depth0 != null ? lookupProperty(depth0,'pinUrl') : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === 'function' ? helper.call(alias1,{'name':'pinUrl','hash':{},'data':data,'loc':{'start':{'line':12,'column':16},'end':{'line':12,'column':26}}}) : helper)))
    + '" alt="Pin Image" class="pin__image" />\r\n    </div>\r\n\r\n    <div class="pin__button-left-bottom"></div>\r\n    <div class="pin__button-right-bottom"></div>\r\n\r\n</div>\r\n';
},'useData':true});
templates['input.hbs'] = template({'1':function(container,depth0,helpers,partials,data) {
    return 'input-error';
},'3':function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '  <label class="input__label">'
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,'inputLabelText') || (depth0 != null ? lookupProperty(depth0,'inputLabelText') : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === 'function' ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{'name':'inputLabelText','hash':{},'data':data,'loc':{'start':{'line':4,'column':30},'end':{'line':4,'column':48}}}) : helper)))
    + '</label>\r\n';
},'5':function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '    <span class="input__icon input__icon-left">\r\n      '
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'inputImageLeft') || (depth0 != null ? lookupProperty(depth0,'inputImageLeft') : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === 'function' ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{'name':'inputImageLeft','hash':{},'data':data,'loc':{'start':{'line':10,'column':6},'end':{'line':10,'column':26}}}) : helper))) != null ? stack1 : '')
    + '\r\n      <!-- Вставка SVG-кода для левой иконки -->\r\n    </span>\r\n';
},'7':function(container,depth0,helpers,partials,data) {
    return ' input__text-padding-left ';
},'9':function(container,depth0,helpers,partials,data) {
    return ' input__text-padding-right';
},'11':function(container,depth0,helpers,partials,data) {
    return 'disabled';
},'13':function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '    <span class="input__icon input__icon-right">\r\n      '
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'inputImageRight') || (depth0 != null ? lookupProperty(depth0,'inputImageRight') : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === 'function' ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{'name':'inputImageRight','hash':{},'data':data,'loc':{'start':{'line':22,'column':6},'end':{'line':22,'column':27}}}) : helper))) != null ? stack1 : '')
    + '\r\n      <!-- Вставка SVG-кода для правой иконки -->\r\n    </span>\r\n';
},'15':function(container,depth0,helpers,partials,data) {
    return '  <div class="input__error-text-list" style="display: none"></div>\r\n  <div class="input__helper-text-list" style="display: none"></div>\r\n';
},'compiler':[8,'>= 4.3.0'],'main':function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3='function', alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '<div class="input-container '
    + alias4(((helper = (helper = lookupProperty(helpers,'inputSize') || (depth0 != null ? lookupProperty(depth0,'inputSize') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'inputSize','hash':{},'data':data,'loc':{'start':{'line':1,'column':28},'end':{'line':1,'column':41}}}) : helper)))
    + ' '
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'Error') : depth0),{'name':'if','hash':{},'fn':container.program(1, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':1,'column':42},'end':{'line':1,'column':73}}})) != null ? stack1 : '')
    + '">\r\n\r\n'
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'inputLabelText') : depth0),{'name':'if','hash':{},'fn':container.program(3, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':3,'column':2},'end':{'line':5,'column':9}}})) != null ? stack1 : '')
    + '\r\n  <div class="input-icons-wrapper">\r\n'
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'inputImageLeft') : depth0),{'name':'if','hash':{},'fn':container.program(5, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':8,'column':4},'end':{'line':13,'column':11}}})) != null ? stack1 : '')
    + '\r\n    <input type="'
    + alias4(((helper = (helper = lookupProperty(helpers,'typeOfInput') || (depth0 != null ? lookupProperty(depth0,'typeOfInput') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'typeOfInput','hash':{},'data':data,'loc':{'start':{'line':15,'column':17},'end':{'line':15,'column':32}}}) : helper)))
    + '"\r\n      class="input '
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'inputImageLeft') : depth0),{'name':'if','hash':{},'fn':container.program(7, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':16,'column':19},'end':{'line':16,'column':74}}})) != null ? stack1 : '')
    + ' '
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'inputImageRight') : depth0),{'name':'if','hash':{},'fn':container.program(9, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':16,'column':75},'end':{'line':16,'column':131}}})) != null ? stack1 : '')
    + '"\r\n      placeholder="'
    + alias4(((helper = (helper = lookupProperty(helpers,'inputPlaceholder') || (depth0 != null ? lookupProperty(depth0,'inputPlaceholder') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'inputPlaceholder','hash':{},'data':data,'loc':{'start':{'line':17,'column':19},'end':{'line':17,'column':39}}}) : helper)))
    + '" value="'
    + alias4(((helper = (helper = lookupProperty(helpers,'inputValue') || (depth0 != null ? lookupProperty(depth0,'inputValue') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'inputValue','hash':{},'data':data,'loc':{'start':{'line':17,'column':48},'end':{'line':17,'column':62}}}) : helper)))
    + '" '
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'isDisabled') : depth0),{'name':'if','hash':{},'fn':container.program(11, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':17,'column':64},'end':{'line':17,'column':97}}})) != null ? stack1 : '')
    + '\r\n      oninput="this.dispatchEvent(new CustomEvent(\'input-change\', { detail: this.value }))" />\r\n\r\n'
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'inputImageRight') : depth0),{'name':'if','hash':{},'fn':container.program(13, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':20,'column':4},'end':{'line':25,'column':11}}})) != null ? stack1 : '')
    + '  </div>\r\n\r\n'
    + ((stack1 = lookupProperty(helpers,'if').call(alias1,(depth0 != null ? lookupProperty(depth0,'inputHelperText') : depth0),{'name':'if','hash':{},'fn':container.program(15, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':28,'column':2},'end':{'line':31,'column':9}}})) != null ? stack1 : '')
    + '\r\n</div>';
},'useData':true});
templates['login.hbs'] = template({'1':function(container,depth0,helpers,partials,data) {
    var stack1;

  return '                    '
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : '')
    + '\r\n';
},'compiler':[8,'>= 4.3.0'],'main':function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3='function', lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '<div class="cover">\r\n    <span class="tomain__tap-button">Главная</span>\r\n    <div class="auth">\r\n        <div class="logo-auth" style="padding: 20px">\r\n            <a class"a__form-logo" style="text-decoration: none" href="">\r\n                <span style="color: black; font-size: 5rem">You</span>\r\n                <span style="color: #e60023; font-size: 5rem">Pin</span>\r\n            </a>\r\n        </div>\r\n        <div class="form-auth">\r\n            <form action="post" class="'
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,'className') : depth0), depth0))
    + '">\r\n'
    + ((stack1 = lookupProperty(helpers,'each').call(alias1,(depth0 != null ? lookupProperty(depth0,'inputs') : depth0),{'name':'each','hash':{},'fn':container.program(1, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':12,'column':16},'end':{'line':14,'column':25}}})) != null ? stack1 : '')
    + '                '
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'button') || (depth0 != null ? lookupProperty(depth0,'button') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'button','hash':{},'data':data,'loc':{'start':{'line':15,'column':16},'end':{'line':15,'column':28}}}) : helper))) != null ? stack1 : '')
    + '\r\n            </form>\r\n            <div class="form-footer">\r\n                <span>Нет аккаунта? '
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'button_form_footer') || (depth0 != null ? lookupProperty(depth0,'button_form_footer') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'button_form_footer','hash':{},'data':data,'loc':{'start':{'line':18,'column':36},'end':{'line':18,'column':60}}}) : helper))) != null ? stack1 : '')
    + '</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n';
},'useData':true});
templates['main.hbs'] = template({'compiler':[8,'>= 4.3.0'],'main':function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3='function', lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '<div class="main__page-container">\r\n    '
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'header') || (depth0 != null ? lookupProperty(depth0,'header') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'header','hash':{},'data':data,'loc':{'start':{'line':2,'column':4},'end':{'line':2,'column':16}}}) : helper))) != null ? stack1 : '')
    + '\r\n    '
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'net') || (depth0 != null ? lookupProperty(depth0,'net') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'net','hash':{},'data':data,'loc':{'start':{'line':3,'column':4},'end':{'line':3,'column':13}}}) : helper))) != null ? stack1 : '')
    + '\r\n</div>\r\n';
},'useData':true});
templates['signup.hbs'] = template({'1':function(container,depth0,helpers,partials,data) {
    var stack1;

  return '                    '
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : '')
    + '\r\n';
},'compiler':[8,'>= 4.3.0'],'main':function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3='function', lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return '<div class="cover">\r\n    <span class="tomain__tap-button">Главная</span>\r\n    <div class="auth">\r\n        <div class="logo-auth" style="padding: 20px">\r\n            <a class"a_form-logo" style="text-decoration: none" href="">\r\n                <span style="color: black; font-size: 5rem">You</span>\r\n                <span style="color: #e60023; font-size: 5rem">Pin</span>\r\n            </a>\r\n        </div>\r\n        <div class="form-auth">\r\n            <form action="post" class="'
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,'className') : depth0), depth0))
    + '">\r\n'
    + ((stack1 = lookupProperty(helpers,'each').call(alias1,(depth0 != null ? lookupProperty(depth0,'inputs') : depth0),{'name':'each','hash':{},'fn':container.program(1, data, 0),'inverse':container.noop,'data':data,'loc':{'start':{'line':12,'column':16},'end':{'line':14,'column':25}}})) != null ? stack1 : '')
    + '                '
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'button') || (depth0 != null ? lookupProperty(depth0,'button') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'button','hash':{},'data':data,'loc':{'start':{'line':15,'column':16},'end':{'line':15,'column':28}}}) : helper))) != null ? stack1 : '')
    + '\r\n            </form>\r\n            <div class="form-footer">\r\n                <span>Уже зарегистрированы? '
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,'button_form_footer') || (depth0 != null ? lookupProperty(depth0,'button_form_footer') : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{'name':'button_form_footer','hash':{},'data':data,'loc':{'start':{'line':18,'column':44},'end':{'line':18,'column':68}}}) : helper))) != null ? stack1 : '')
    + '</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n';
},'useData':true});
templates['unknown.hbs'] = template({'compiler':[8,'>= 4.3.0'],'main':function(container,depth0,helpers,partials,data) {
    return '<div class="unknown__page-container">\r\n    <span class="tomain__tap-button">Главная</span>\r\n    <h1>404 страница не найдена</h1>\r\n</div>';
},'useData':true});
})();