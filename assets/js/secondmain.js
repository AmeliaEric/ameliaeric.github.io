function showContent(contentId) {
    // Hide all navigation items
    var navItems = document.querySelectorAll('.nav-item');
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].style.display = 'none';
    }
    
    // Show the selected navigation item
    var selectedNav = document.getElementById('nav' + contentId.slice(-1));
    selectedNav.style.display = 'block';
    
    // Hide all content items
    var contentItems = document.querySelectorAll('.content-item');
    for (var j = 0; j < contentItems.length; j++) {
      contentItems[j].style.display = 'none';
    }
    
    // Show the corresponding content item
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
  }