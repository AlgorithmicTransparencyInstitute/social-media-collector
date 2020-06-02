import tagMessage from '../tagMessage';

const tagPostElement = (post, permissions, doc = document) => {
  const { elem, id } = post;
  const wrapper = elem.closest('[data-fte]');
  if (!wrapper) {
    console.debug('elem has no wrapper', elem);
    return;
  }

  const oldTag = wrapper.querySelector(':scope [data-ati-tag]');
  if (oldTag) {
    const oldId = oldTag.getAttribute('data-ati-tag');
    console.debug('Duplicate detected', post);
    console.debug('Current id', id);
    console.debug(' Former id', oldId);

    // TODO: update saved posts for both old and new with links to each other.
    // and report that info to the back end.
    return;
  }
  const span = doc.createElement('span');
  span.setAttribute('data-ati-tag', id);
  span.innerHTML = `<p style="width: 100%; font-size:9px; display:inline-block; position:absolute; top:2px; padding-left: 0; padding-bottom: 0; z-index: 12; margin: 0; color: #ccc; text-align: center;">${tagMessage(
    post,
    permissions
  )}</p>`;
  wrapper.prepend(span);
};

export default tagPostElement;
