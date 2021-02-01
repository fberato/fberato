(function() {
  var floatingLabel;

  (function() {
    var logo, logo_css;
    logo = '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>codepen-logo</title><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.139 21.651l1.35-1.35a.387.387 0 0 0 0-.54l-3.49-3.49a.387.387 0 0 0-.54 0l-1.35 1.35a.39.39 0 0 0 0 .54l3.49 3.49a.38.38 0 0 0 .54 0zm6.922.153l2.544-2.543a.722.722 0 0 0 0-1.018l-6.582-6.58a.722.722 0 0 0-1.018 0l-2.543 2.544a.719.719 0 0 0 0 1.018l6.58 6.579c.281.28.737.28 1.019 0zm14.779-5.85l-7.786-7.79a.554.554 0 0 0-.788 0l-5.235 5.23a.558.558 0 0 0 0 .789l7.79 7.789c.216.216.568.216.785 0l5.236-5.236a.566.566 0 0 0 0-.786l-.002.003zm-3.89 2.806a.813.813 0 1 1 0-1.626.813.813 0 0 1 0 1.626z" fill="#FFF" fill-rule="evenodd"/></svg>';
    logo_css = '.mM{display:block;border-radius:50%;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);position:fixed;bottom:1em;right:1em;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all 240ms ease-in-out;transition:all 240ms ease-in-out;z-index:9999;opacity:0.75}.mM svg{display:block}.mM:hover{opacity:1;-webkit-transform:scale(1.125);transform:scale(1.125)}';
    document.head.insertAdjacentHTML('beforeend', '<style>' + logo_css + '</style>');
    document.body.insertAdjacentHTML('beforeend', '<a href="https://codepen.io/mican/" target="_blank" class="mM">' + logo + '</a>');
  })();

  (function() {
    var footer;
    footer = '<footer id="footer" role="contentinfo"> <div class="container"> <h3 class="footer-title"> <a href="https://codepen.io/collection/XRoxGR" target="_blank">Calibration template</a> </h3> <p class="footer-entry"> <a href="https://mobilemarkup.com" target="_blank">mobileMarkup.com</a> </p> </div> </footer>';
    return document.body.insertAdjacentHTML('beforeend', footer);
  })();

  floatingLabel = class floatingLabel {
    constructor(form, options = {}) {
      var event, i, input, j, label, len, len1, ref, ref1;
      if (!form) {
        return;
      }
      options.focusClass || (options.focusClass = "focus");
      options.activeClass || (options.activeClass = "active");
      options.errorClass || (options.errorClass = "error");
      form.classList.add('has-floated-label');
      ref = form.querySelectorAll('label');
      for (i = 0, len = ref.length; i < len; i++) {
        label = ref[i];
        if (!(input = document.querySelector(`#${label.getAttribute('for')}`))) {
          return;
        }
        ref1 = ['keyup', 'input', 'change'];
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          event = ref1[j];
          input.addEventListener(event, function() {
            this.parentNode.classList.remove(options.errorClass);
            return this.parentNode.classList.toggle(options.activeClass, !!this.value);
          });
        }
        input.addEventListener('focus', function() {
          return this.parentNode.classList.add(options.focusClass);
        });
        input.addEventListener('blur', function() {
          return this.parentNode.classList.remove(options.focusClass);
        });
        input.parentNode.classList.toggle(options.activeClass, !!input.value);
      }
    }

  };

  // initialize
  window.floatingLabel = new floatingLabel(document.querySelector('.form'));

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFHLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDSCxRQUFBLElBQUEsRUFBQTtJQUFFLElBQUEsR0FBTztJQUNQLFFBQUEsR0FBVztJQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWQsQ0FBaUMsV0FBakMsRUFBOEMsU0FBQSxHQUFZLFFBQVosR0FBdUIsVUFBckU7SUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFkLENBQWlDLFdBQWpDLEVBQThDLGlFQUFBLEdBQW9FLElBQXBFLEdBQTJFLE1BQXpIO0VBSkMsQ0FBQTs7RUFNQSxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0gsUUFBQTtJQUFFLE1BQUEsR0FBUztXQVVULFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWQsQ0FBaUMsV0FBakMsRUFBOEMsTUFBOUM7RUFYQyxDQUFBOztFQVlHLGdCQUFOLE1BQUEsY0FBQTtJQUVFLFdBQWEsQ0FBQyxJQUFELEVBQU0sVUFBUSxDQUFBLENBQWQsQ0FBQTtBQUVmLFVBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQTtNQUFJLEtBQWMsSUFBZDtBQUFBLGVBQUE7O01BRUEsT0FBTyxDQUFDLGVBQVIsT0FBTyxDQUFDLGFBQWU7TUFDdkIsT0FBTyxDQUFDLGdCQUFSLE9BQU8sQ0FBQyxjQUFnQjtNQUN4QixPQUFPLENBQUMsZUFBUixPQUFPLENBQUMsYUFBZTtNQUV2QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQWYsQ0FBbUIsbUJBQW5CO0FBRUE7TUFBQSxLQUFBLHFDQUFBOztRQUNFLEtBQWMsQ0FBQSxLQUFBLEdBQVEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsQ0FBQSxDQUFBLENBQUEsQ0FBSSxLQUFLLENBQUMsWUFBTixDQUFtQixLQUFuQixDQUFKLENBQUEsQ0FBdkIsQ0FBUixDQUFkO0FBQUEsaUJBQUE7O0FBRUE7UUFBQSxLQUFBLHdDQUFBOztVQUNFLEtBQUssQ0FBQyxnQkFBTixDQUF1QixLQUF2QixFQUE4QixRQUFBLENBQUEsQ0FBQTtZQUM1QixJQUFDLENBQUEsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUF0QixDQUE2QixPQUFPLENBQUMsVUFBckM7bUJBQ0EsSUFBQyxDQUFBLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBdEIsQ0FBNkIsT0FBTyxDQUFDLFdBQXJDLEVBQWtELENBQUMsQ0FBQyxJQUFDLENBQUEsS0FBckQ7VUFGNEIsQ0FBOUI7UUFERjtRQUlBLEtBQUssQ0FBQyxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxRQUFBLENBQUEsQ0FBQTtpQkFDOUIsSUFBQyxDQUFBLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBdEIsQ0FBMEIsT0FBTyxDQUFDLFVBQWxDO1FBRDhCLENBQWhDO1FBRUEsS0FBSyxDQUFDLGdCQUFOLENBQXVCLE1BQXZCLEVBQStCLFFBQUEsQ0FBQSxDQUFBO2lCQUM3QixJQUFDLENBQUEsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUF0QixDQUE2QixPQUFPLENBQUMsVUFBckM7UUFENkIsQ0FBL0I7UUFFQSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUEzQixDQUFrQyxPQUFPLENBQUMsV0FBMUMsRUFBdUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUEvRDtNQVhGO0lBVlc7O0VBRmYsRUFsQkE7OztFQTZDQSxNQUFNLENBQUMsYUFBUCxHQUF1QixJQUFJLGFBQUosQ0FBa0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbEI7QUE3Q3ZCIiwic291cmNlc0NvbnRlbnQiOlsiZG8gLT5cbiAgbG9nbyA9ICc8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlPmNvZGVwZW4tbG9nbzwvdGl0bGU+PHBhdGggZD1cIk0xNiAzMkM3LjE2MyAzMiAwIDI0LjgzNyAwIDE2UzcuMTYzIDAgMTYgMHMxNiA3LjE2MyAxNiAxNi03LjE2MyAxNi0xNiAxNnpNNy4xMzkgMjEuNjUxbDEuMzUtMS4zNWEuMzg3LjM4NyAwIDAgMCAwLS41NGwtMy40OS0zLjQ5YS4zODcuMzg3IDAgMCAwLS41NCAwbC0xLjM1IDEuMzVhLjM5LjM5IDAgMCAwIDAgLjU0bDMuNDkgMy40OWEuMzguMzggMCAwIDAgLjU0IDB6bTYuOTIyLjE1M2wyLjU0NC0yLjU0M2EuNzIyLjcyMiAwIDAgMCAwLTEuMDE4bC02LjU4Mi02LjU4YS43MjIuNzIyIDAgMCAwLTEuMDE4IDBsLTIuNTQzIDIuNTQ0YS43MTkuNzE5IDAgMCAwIDAgMS4wMThsNi41OCA2LjU3OWMuMjgxLjI4LjczNy4yOCAxLjAxOSAwem0xNC43NzktNS44NWwtNy43ODYtNy43OWEuNTU0LjU1NCAwIDAgMC0uNzg4IDBsLTUuMjM1IDUuMjNhLjU1OC41NTggMCAwIDAgMCAuNzg5bDcuNzkgNy43ODljLjIxNi4yMTYuNTY4LjIxNi43ODUgMGw1LjIzNi01LjIzNmEuNTY2LjU2NiAwIDAgMCAwLS43ODZsLS4wMDIuMDAzem0tMy44OSAyLjgwNmEuODEzLjgxMyAwIDEgMSAwLTEuNjI2LjgxMy44MTMgMCAwIDEgMCAxLjYyNnpcIiBmaWxsPVwiI0ZGRlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+J1xuICBsb2dvX2NzcyA9ICcubU17ZGlzcGxheTpibG9jaztib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtwb3NpdGlvbjpmaXhlZDtib3R0b206MWVtO3JpZ2h0OjFlbTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAyNDBtcyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAyNDBtcyBlYXNlLWluLW91dDt6LWluZGV4Ojk5OTk7b3BhY2l0eTowLjc1fS5tTSBzdmd7ZGlzcGxheTpibG9ja30ubU06aG92ZXJ7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTI1KTt0cmFuc2Zvcm06c2NhbGUoMS4xMjUpfSdcbiAgZG9jdW1lbnQuaGVhZC5pbnNlcnRBZGphY2VudEhUTUwgJ2JlZm9yZWVuZCcsICc8c3R5bGU+JyArIGxvZ29fY3NzICsgJzwvc3R5bGU+J1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCAnYmVmb3JlZW5kJywgJzxhIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vbWljYW4vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJtTVwiPicgKyBsb2dvICsgJzwvYT4nXG4gIHJldHVyblxuZG8gLT5cbiAgZm9vdGVyID0gJzxmb290ZXIgaWQ9XCJmb290ZXJcIiByb2xlPVwiY29udGVudGluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwiZm9vdGVyLXRpdGxlXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9jb2xsZWN0aW9uL1hSb3hHUlwiIHRhcmdldD1cIl9ibGFua1wiPkNhbGlicmF0aW9uIHRlbXBsYXRlPC9hPlxuICAgICAgICA8L2gzPlxuICAgICAgICA8cCBjbGFzcz1cImZvb3Rlci1lbnRyeVwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL21vYmlsZW1hcmt1cC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5tb2JpbGVNYXJrdXAuY29tPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj4nICBcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwgJ2JlZm9yZWVuZCcsIGZvb3RlclxuY2xhc3MgZmxvYXRpbmdMYWJlbFxuICBcbiAgY29uc3RydWN0b3I6IChmb3JtLG9wdGlvbnM9e30pIC0+XG4gICAgXG4gICAgcmV0dXJuIHVubGVzcyBmb3JtXG4gICAgXG4gICAgb3B0aW9ucy5mb2N1c0NsYXNzIHx8PSBcImZvY3VzXCJcbiAgICBvcHRpb25zLmFjdGl2ZUNsYXNzIHx8PSBcImFjdGl2ZVwiXG4gICAgb3B0aW9ucy5lcnJvckNsYXNzIHx8PSBcImVycm9yXCJcbiAgICBcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQgJ2hhcy1mbG9hdGVkLWxhYmVsJ1xuICAgIFxuICAgIGZvciBsYWJlbCBpbiBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJylcbiAgICAgIHJldHVybiB1bmxlc3MgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiIyN7bGFiZWwuZ2V0QXR0cmlidXRlKCdmb3InKX1cIilcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgZm9yIGV2ZW50IGluIFsna2V5dXAnLCdpbnB1dCcsICdjaGFuZ2UnXVxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyIGV2ZW50LCAtPlxuICAgICAgICAgIEBwYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUgb3B0aW9ucy5lcnJvckNsYXNzXG4gICAgICAgICAgQHBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSBvcHRpb25zLmFjdGl2ZUNsYXNzLCAhIUB2YWx1ZVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciAnZm9jdXMnLCAtPlxuICAgICAgICBAcGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkIG9wdGlvbnMuZm9jdXNDbGFzc1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciAnYmx1cicsIC0+XG4gICAgICAgIEBwYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUgb3B0aW9ucy5mb2N1c0NsYXNzXG4gICAgICBpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUgb3B0aW9ucy5hY3RpdmVDbGFzcywgISFpbnB1dC52YWx1ZVxuXG4jIGluaXRpYWxpemVcbiAgICBcbndpbmRvdy5mbG9hdGluZ0xhYmVsID0gbmV3IGZsb2F0aW5nTGFiZWwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKSJdfQ==
//# sourceURL=coffeescript