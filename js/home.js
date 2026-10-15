(function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll(".gcard"));
  var bands = { low: [0, 5000], mid: [5001, 8000], high: [8001, 1000000] };
  var band = "mid";

  function inBand(price, key) {
    var range = bands[key];
    return price >= range[0] && price <= range[1];
  }

  function count(key) {
    return cards.filter(function (card) {
      return inBand(Number(card.getAttribute("data-price")), key);
    }).length;
  }

  document.querySelectorAll("[data-count]").forEach(function (node) {
    node.textContent = String(count(node.getAttribute("data-count")));
  });

  function apply() {
    var shown = 0;
    cards.forEach(function (card) {
      var ok = inBand(Number(card.getAttribute("data-price")), band);
      card.hidden = !ok;
      if (ok) shown += 1;
    });
    var label = document.getElementById("gift-summary");
    var names = { low: "〜5,000円", mid: "5,001〜8,000円", high: "8,001円〜" };
    if (label) label.textContent = names[band] + "のお歳暮ギフト　" + shown + "点";
  }

  document.querySelectorAll("[data-band]").forEach(function (button) {
    button.addEventListener("click", function () {
      band = button.getAttribute("data-band");
      document.querySelectorAll("[data-band]").forEach(function (other) {
        var on = other === button;
        other.classList.toggle("on", on);
        other.setAttribute("aria-pressed", on ? "true" : "false");
      });
      apply();
    });
  });

  function setOmote(value, use) {
    var omote = document.getElementById("noshi-omote");
    if (omote) omote.textContent = value;
    document.querySelectorAll("[data-omote]").forEach(function (button) {
      var on = button.getAttribute("data-omote") === value && button.getAttribute("data-use") !== "mochu" && button.getAttribute("data-use") !== "home";
      if (button.classList.contains("om")) {
        on = button.getAttribute("data-omote") === value;
      }
      button.classList.toggle("on", on);
      button.setAttribute("aria-pressed", on ? "true" : "false");
    });
    document.querySelectorAll("[data-use]").forEach(function (button) {
      if (button.classList.contains("om")) return;
      var on = use ? button.getAttribute("data-use") === use : button.getAttribute("data-omote") === value && button.getAttribute("data-use") !== "mochu" && button.getAttribute("data-use") !== "home";
      button.classList.toggle("on", on);
      button.setAttribute("aria-pressed", on ? "true" : "false");
    });
    var mochu = document.getElementById("mochu-note");
    if (mochu) mochu.hidden = use !== "mochu";
  }

  document.querySelectorAll("[data-omote]").forEach(function (button) {
    button.addEventListener("click", function () {
      setOmote(button.getAttribute("data-omote"), button.getAttribute("data-use"));
    });
  });

  document.querySelectorAll("[data-servings]").forEach(function (button) {
    button.addEventListener("click", function () {
      var on = button.getAttribute("aria-pressed") !== "true";
      document.querySelectorAll("[data-servings]").forEach(function (other) {
        other.classList.remove("on");
        other.setAttribute("aria-pressed", "false");
      });
      if (on) {
        button.classList.add("on");
        button.setAttribute("aria-pressed", "true");
      }
    });
  });

  var nameInput = document.getElementById("noshi-name");
  var nameOut = document.getElementById("noshi-name-out");
  var nameCount = document.getElementById("noshi-count");
  if (nameInput && nameOut) {
    nameInput.addEventListener("input", function () {
      var value = nameInput.value.replace(/\s+/g, "");
      if (value.length > 20) {
        value = value.slice(0, 20);
        nameInput.value = value;
      }
      nameOut.textContent = value || "○○○";
      if (nameCount) nameCount.textContent = value.length + " / 20文字";
    });
  }

  apply();
})();
