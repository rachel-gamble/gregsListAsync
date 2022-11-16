

export class Job {
    constructor(data) {
        this.company = data.company || ''
        this.jobTitle = data.jobTitle || ''
        this.hours = data.hours || 0
        this.rate = data.rate || 0
        this.description = data.description || ''
        this.createdAt = new Date(data.createdAt)
    }

    get ListTemplate() {
        return `
                <div class="col-12 col-md-4 p-4">
                    <div class="card">
                      <img src="${this.imgUrl}" class="card-img-top"
                        alt="${this.company}">
                      <div class="card-body">
                        <h5 class="card-title d-flex justify-content-between mb-2">
                          <span>${this.company}</span>
                          <span>${this.jobTitle}</span>
                          <span>${this.hours}</span>
                        </h5>
                        <div class="d-flex justify-content-between">
                        <button onclick="app.jobsController.setActiveJob('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        See Details
                        </button>
                        <button onclick="app.jobsController.removeJob('${this.id}')" title="Delete job!" class="btn btn-danger">
                          <i class="mdi mdi-delete"></i>
                        </button>
                      </div>
                    </div>
                    </div>
                    </div>
        
        `
    }
    static GetJobFormTemplate(job) {
        if (!job) {
            job = new Job({})
        }
        return `
        <form onsubmit="app.jobsController.${job.id ? `editJob('${job.id}')` : 'createJob()'}">
        <div class="form-floating mb-3">
          <input required type="text" minlength="3" class="form-control" id="job-company" placeholder="Company"
            name="company" value="${job.company}">
          <label for="job-company">Company</label>
        </div>
        <div class="form-floating mb-3">
          <input required type="text" class="form-control" id="job-title" placeholder="Job Title"
            name="title" value="${job.title}">
          <label for="job-title">Title</label>
        </div>
        <div class="form-floating mb-3">
          <input required type="number" class="form-control" id="job-hours" placeholder="Job Hours"
            name="hours" value="${job.hours}">
          <label for="job-hours">Hours</label>
        </div>
        <div class="form-floating mb-3">
          <input required type="number" class="form-control" id="job-rate" placeholder="Rate"
            name="rate" value="${job.rate}">
          <label for="job-salary">Rate</label>
        </div>
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a description here" id="job-description"
            name="description">${job.description}</textarea>
          <label for="job-description">Description</label>
        </div>
        <button type="submit" class="btn btn-success mt-3">Submit</button>
        <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
      </form>
        `
    }
}