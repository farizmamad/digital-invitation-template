import SectionTitle from "../components/SectionTitle";

export default function GallerySection({ imagesUrl }) {
  const imagesColumn = imagesUrl.map(url => {
      return (
          <td className="span1" key={url}>
              <div className="col-12 col-md-4">
                  <img src={url} width={200} height={200} alt="..." />
              </div>
          </td>
      );
  });
  return (
      <section className="container-fluid gallery">
          <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="col-10 col-md-12 border border-4 border-white bg-light rounded-box margin-top-2 margin-bottom-3">
                  <div className="row justify-content-center">
                      <SectionTitle text='Our Gallery' />
                  </div>
                  <table>
                      <tbody>
                          <tr className="row justify-content-center">
                              { imagesColumn }
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </section>
  );
}