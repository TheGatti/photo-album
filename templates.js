var albumTemplates = {
    homeTmpl: `
      <div class="col-md-4">
        <div class="album_cover" data-album="<%= id %>">
          <img src="<%= cover %>"/>
        </div>
      </div>
    `,
    albumTmpl: `
      <div class="album <%= id %> hidden">
      <h1><%= title %></h1>
      <div class="inner_pics">

      </div>
    </div>
    `,
    innerPicsTmpl:`
    <div class="col-md-4">
      <div class="six_pics">
        <img src="<%= photo %>"/>
      </div>
    </div>
    `,
    navTmpl:`
    <li id="<%= id %>">
    <%= title %>
    </li>
    `
  }
